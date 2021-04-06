import React, { useState, useEffect, useLayoutEffect, createRef } from 'react';
import { useParams } from 'react-router-dom'
import rough from 'roughjs/bundled/rough.esm'
import { useScreenshot } from 'use-react-screenshot'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { IconButton } from '@material-ui/core';

const useHistory = initialState => {
    const [index, setIndex] = useState(0);
    const [history, setHistory] = useState([initialState]);

    const setState = (action, overwrite = false) => {
        const newState = typeof action === "function" ? action(history[index]) : action;
        if (overwrite) {
            const historyCopy = [...history];
            historyCopy[index] = newState;
            setHistory(historyCopy);
        } else {
            const updatedState = [...history].slice(0, index + 1);
            setHistory([...updatedState, newState]);
            setIndex(prevState => prevState + 1);
        }
    };

    const undo = () => index > 0 && setIndex(prevState => prevState - 1);
    const redo = () => index < history.length - 1 && setIndex(prevState => prevState + 1);

    return [history[index], setState, undo, redo];
};

function Draw(props) {
    const [drawing, setDrawing] = useState("")
    const [elements, setElements, undo, redo] = useHistory([]);
    const [selectedElement, setSelectedElement] = useState(null)

    const [tool, setTool] = useState('')

    const ref = createRef(null)
    const [screenshot, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)

    const id = useParams('id')['id']
    const project_id = useParams('project_id')['project_id']
    const image = props.location.state.detail

    const generator = rough.generator()

    

    useEffect(() => {
        const undoRedoFunction = event => {
            if ((event.metaKey || event.ctrlKey) && event.key === "z") {
                if (event.shiftKey) {
                    redo();
                } else {
                    undo();
                }
            }
        };

        document.addEventListener("keydown", undoRedoFunction);
        return () => {
            document.removeEventListener("keydown", undoRedoFunction);
        };
    }, [undo, redo]);

    useLayoutEffect(() => {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const roughCanvas = rough.canvas(canvas)

        elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement))

    }, [elements])

    const createElement = (id, x1, y1, x2, y2) => {
        const roughElement = generator.rectangle(x1, y1, x2 - x1, y2 - y1)
        return { id, x1, y1, x2, y2, roughElement }
    }

    const updateElement = (id, x1, y1, x2, y2) => {
        const updatedElement = createElement(id, x1, y1, x2, y2)
        const elementsCopy = [...elements]
        elementsCopy[id] = updatedElement
        setElements(elementsCopy)
    }

    const nearPoint = (x, y, x1, y1, name) => {
        return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5 ? name : null;
    }

    const resizedCoordinates = (clientX, clientY, position, coordinates) => {
        const { x1, y1, x2, y2 } = coordinates;
        switch (position) {
            case "tl":
            case "start":
                return { x1: clientX, y1: clientY, x2, y2 };
            case "tr":
                return { x1, y1: clientY, x2: clientX, y2 };
            case "bl":
                return { x1: clientX, y1, x2, y2: clientY };
            case "br":
            case "end":
                return { x1, y1, x2: clientX, y2: clientY };
            default:
                return null; //should not really get here...
        }
    };

    const cursorForPosition = position => {
        switch (position) {
            case "tl":
            case "br":
            case "start":
            case "end":
                return "nwse-resize";
            case "tr":
            case "bl":
                return "nesw-resize";
            default:
                return "move";
        }
    };

    const isWithinElement = (x, y, element) => {
        const { x1, x2, y1, y2 } = element
        const topLeft = nearPoint(x, y, x1, y1, "tl");
        const topRight = nearPoint(x, y, x2, y1, "tr");
        const bottomLeft = nearPoint(x, y, x1, y2, "bl");
        const bottomRight = nearPoint(x, y, x2, y2, "br");
        const inside = x >= x1 && x <= x2 && y >= y1 && y <= y2 ? "inside" : null;
        return topLeft || topRight || bottomLeft || bottomRight || inside;
    }

    const getElementAtPosition = (x, y, elements) => {
        return elements
            .map(element => ({ ...element, position: isWithinElement(x, y, element) }))
            .find(element => element.position !== null);
    }

    const adjustCordinate = (element) => {
        const { x1, y1, x2, y2 } = element
        const minX = Math.min(x1, x2)
        const maxX = Math.max(x1, x2)
        const minY = Math.min(y1, y2)
        const maxY = Math.max(y1, y2)

        return { x1: minX, y1: minY, x2: maxX, y2: maxY }
    }

    const handleMouseDown = (event) => {
        const { clientX, clientY } = event;
        if (tool === "selection") {
            const element = getElementAtPosition(clientX, clientY, elements);
            if (element) {
                const offsetX = clientX - element.x1;
                const offsetY = clientY - element.y1;
                setSelectedElement({ ...element, offsetX, offsetY });
                setElements(prevState => prevState);

                if (element.position === "inside") {
                    setDrawing("moving");
                } else {
                    setDrawing("resizing");
                }
            }
        } else {
            const id = elements.length;
            const element = createElement(id, clientX, clientY, clientX, clientY, tool);
            setElements(prevState => [...prevState, element]);
            setSelectedElement(element);

            setDrawing("drawing");
        }
    }

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event
        if (tool === "selection") {
            const element = getElementAtPosition(clientX, clientY, elements);
            event.target.style.cursor = element ? cursorForPosition(element.position) : "default";
        }
        if (drawing == "drawing") {
            const index = elements.length - 1
            const { x1, y1 } = elements[index]
            updateElement(index, x1, y1, clientX, clientY)

        }
        else if (drawing == "moving") {
            const { id, x1, x2, y1, y2, offsetX, offsetY } = selectedElement
            const width = x2 - x1
            const height = y2 - y1
            const nextX = clientX - offsetX
            const nextY = clientY - offsetY
            updateElement(id, nextX, nextY, nextX + width, nextY + height)
        }
        else if (drawing === "resizing") {
            const { id, position, ...coordinates } = selectedElement;
            const { x1, y1, x2, y2 } = resizedCoordinates(clientX, clientY, position, coordinates);
            updateElement(id, x1, y1, x2, y2);
        }
    }

    const handleMouseUp = () => {
        if (selectedElement) {
            const index = selectedElement.id;
            const { id } = elements[index];
            if (drawing === "drawing" || drawing === "resizing") {
                const { x1, y1, x2, y2 } = adjustCordinate(elements[index]);
                updateElement(id, x1, y1, x2, y2);
            }
        }
        setDrawing("none");
        setSelectedElement(null);
        getImage()

    }

    



    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '700px',
                marginTop: '30px'

            }}>
                <h1>Edit Image</h1>
                <div style={{
                    marginTop: 50,
                    marginLeft: -200
                }}>
                    <input style={{ margin: 10 }} type="radio" id="draw" checked={tool === "draw"} onChange={() => setTool("draw")} />
                    <label htmlFor="draw">Draw </label>
                    <input style={{ margin: 10 }} type="radio" id="selection" checked={tool === "selection"} onChange={() => setTool("selection")} />
                    <label htmlFor="selection">Selection </label>
                    <button color={'primary'} style={{ margin: 10 }} onClick={undo}>Undo</button>
                    <button color={'primary'} style={{ margin: 10 }} onClick={redo}>Redo</button>
                </div>
                <IconButton color="primary" style={{ position: 'absolute', right: '1%' }} component="span"><CheckBoxIcon style={{ width: 70, height: 70 }} /></IconButton>
            </div>
            <div style={{ marginTop: '20px' }} ref={ref}>
                <div style={{
                    backgroundImage: `url(${image})`,
                    height: window.innerHeight,
                    width: window.innerWidth
                }}  >
                    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}
                        onMouseDown={(event) => handleMouseDown(event)}
                        onMouseMove={(event) => handleMouseMove(event)}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >Canvas</canvas></div>
            </div>
        </div>
    );
}

export default Draw;