import React, { useState, useEffect, useLayoutEffect, createRef } from 'react';
import { useParams } from 'react-router-dom'
import rough from 'roughjs/bundled/rough.esm'
import { useScreenshot } from 'use-react-screenshot'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalForm from '../components/ModalForm'
import ModalFilterForm from '../components/ModalFilterForm'
import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";
import Fab from '@material-ui/core/Fab'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import 'animate.css'
import { getImage } from '../service'

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
    const [elements, setElements, undo, redo] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null)
    const [open, setOpen] = useState(false)
    const [img, setImg] = useState(props.location.state.detail)
    const [tool, setTool] = useState('')
    const [filteropen,setFilteropen] = useState(false)

    const [work,setWork] = useState()
    const [con,setCon] = useState()
    const [visible,setVisible] = useState(false)
   


    const ref = createRef(null)
    const [screenshot, takeScreenshot] = useScreenshot()
    const getImageScreen = () => takeScreenshot(ref.current)

    const id = useParams('id')['id']
    const project_id = useParams('project_id')['project_id']
    const image = props.location.state.detail

    const generator = rough.generator()

    const getScreenshot = () => {
        getImageScreen().then((value) => {
            setImg(value)
        })
    }

    const filterCAD = () => {
        setOpen(true)
        getImageScreen().then((value) => {
            setImg(value)
        })

    }

    const filterOutCAD = () => {
        setFilteropen(true)
        setElements([])
    }

    useEffect(() => {
        const fetchData = async () => {
            let arr = []
            console.log(id)
            const data_image = await getImage({ id: id, action: "GET_IMAGE_BY_IDs" })
            if ('elements' in data_image['result']) {
                for (let index = 0; index < data_image['result']['elements'].length; index++) {
                    const id = data_image['result']['elements'][index][0]['id']
                    const x1 = data_image['result']['elements'][index][0]['x1']
                    const y1 = data_image['result']['elements'][index][0]['y1']
                    const x2 = data_image['result']['elements'][index][0]['x2']
                    const y2 = data_image['result']['elements'][index][0]['y2']
                    
                    const element = createElement(id,x1,y1,x2,y2)
                    console.log(element)
                    arr.push(element)
                    
                }
                setElements(prevState => [...prevState,...arr])
               
            }

        }
        fetchData()
        
    }, [])

   

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(28);
        doc.text(30, 20, 'Filtered CAD Drawing !');
        doc.addImage(img, 'JPEG', 15, 40, 180, 160);
        doc.output('CADImage');
        doc.text(30, 220, `Worktype :  ${work}`);
        doc.text(30, 240, `Contractor :  ${con}`);
        doc.save(`CAD.pdf`);
    }


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
        ctx.fillStyle = "#FF0000"
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        const roughCanvas = rough.canvas(canvas)

        elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement))

    }, [elements])

    const createElement = (id, x1, y1, x2, y2) => {
        const roughElement = generator.rectangle(x1, y1, x2 - x1, y2 - y1, {roughness: 0.2, fill: 'blue'})
        return { id, x1, y1, x2, y2, roughElement }
    }

    const updateElement = (id, x1, y1, x2, y2) => {
        const updatedElement = createElement(id, x1, y1, x2, y2)
        console.log(elements)
        const elementsCopy = [...elements]
        elementsCopy[id] = updatedElement
        console.log(elementsCopy)
        setElements(elementsCopy)
    }

    let arr = []
    const filteredCAD = (id,x1,x2,y1,y2) => {
        const element = createElement(id,x1,y1,x2,y2)
        arr.push(element)
        setElements(prevState => [...prevState,...arr])  
    }

    const getImages = () => {
        getImageScreen().then((value) => {
            setImg(value)
        })
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
            const element = createElement(id, clientX, clientY, clientX, clientY);
            setElements(prevState => [...prevState, element]);
            setSelectedElement(element);

            setDrawing("drawing");
        }
    }

    
    

    const handleMouseMove = (event) => {
        
        const { clientX, clientY } = event
        if (tool === "selection") {
            setVisible(false)
            const element = getElementAtPosition(clientX, clientY, elements);
            event.target.style.cursor = element ? cursorForPosition(element.position) : "default";
        }
        if (drawing == "drawing") {
            setVisible(false)
            const index = elements.length - 1
            const { x1, y1 } = elements[index]
            updateElement(index, x1, y1, clientX, clientY)

        }
        else if (drawing == "moving") {
            setVisible(false)
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


    }

    const passValue = (work,con) => {
        setWork(work)
        setCon(con)
        setVisible(true)
    }





    return (
        <div>
            <div ref={ref}>
                <div style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat : 'no-repeat',
                    backgroundSize : '100% 620px',
                }}  >
                    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}
                        onMouseDown={(event) => handleMouseDown(event)}
                        onMouseMove={(event) => handleMouseMove(event)}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >Canvas</canvas></div>
            </div>
            {visible ? <Fab size={"large"} variant="extended" color="primary" onClick={generatePDF}>Generate PDF</Fab> : null}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '650px'

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
                </div>
                <IconButton onClick={getImages} color="primary" style={{ position: 'absolute', right: '11%' }} component="span"><CameraAltIcon style={{ width: 70, height: 70 }} /></IconButton>
                <IconButton onClick={filterCAD} color="primary" style={{ position: 'absolute', right: '1%' }} component="span"><CheckBoxIcon style={{ width: 70, height: 70 }} /></IconButton>
                <IconButton onClick={filterOutCAD} color="primary" style={{ position: 'absolute', right: '6%' }} component="span"><SettingsIcon style={{ width: 70, height: 70 }} /></IconButton>
            </div>
            {open ? <ModalForm image={img} element={elements} open={() => setOpen(true)} handleClose={() => setOpen(false)} backdrop="static" /> : null}
            {filteropen ? <ModalFilterForm filteredCAD={filteredCAD} image={img} passValue={passValue} element={elements} open={() => setFilteropen(true)} handleClose={() => setFilteropen(false)} backdrop="static" /> : null}

        </div>
    );
}

export default Draw;