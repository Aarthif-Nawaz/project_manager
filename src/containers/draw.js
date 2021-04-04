import React, { useState, useEffect, useLayoutEffect, createRef } from 'react';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import rough from 'roughjs/bundled/rough.esm'
import { useScreenshot } from 'use-react-screenshot'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { IconButton } from '@material-ui/core';

function Draw(props) {
    const [drawing, setDrawing] = useState(false)
    const [elements, setElements] = useState([])

    const ref = createRef(null)
    const [screenshot, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)

    const id = useParams('id')['id']
    const project_id = useParams('project_id')['project_id']
    const image = props.location.state.detail

    const generator = rough.generator()

    useLayoutEffect(() => {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const roughCanvas = rough.canvas(canvas)

        elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement))

    }, [elements])

    const createElement = (x1, y1, x2, y2) => {
        const roughElement = generator.rectangle(x1, y1, x2 - x1, y2 - y1)
        return { x1, y1, x2, y2, roughElement }
    }

    const handleMouseDown = (event) => {
        setDrawing(true)

        const { clientX, clientY } = event
        const element = createElement(clientX, clientY, clientX, clientY)
        setElements(prevState => [...prevState, element])
    }

    const handleMouseMove = (event) => {
        if (!drawing) return;

        const { clientX, clientY } = event
        const index = elements.length - 1
        const { x1, y1 } = elements[index]
        const updatedElement = createElement(x1, y1, clientX, clientY)
        console.log(x1, y1, clientX, clientY)
        const elementsCopy = [...elements]
        elementsCopy[index] = updatedElement
        setElements(elementsCopy)

    }

    const handleMouseUp = () => {
        setDrawing(false)
        getImage()
        
    }


    const history = useHistory()

    return (
        <div>
            <div style={{
                display:'flex',
                flexDirection:'row',
                marginLeft:'700px',
                marginTop:'30px'
                
            }}>
                <h1>Edit Image</h1>
                <IconButton color="primary" style={{position:'absolute',right:'1%'}} component="span"><CheckBoxIcon style={{width:70, height:70}} /></IconButton>
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