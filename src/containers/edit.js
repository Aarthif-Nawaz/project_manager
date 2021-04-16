import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'
import { addProject, getProjects, addImage, getImage } from '../service'
import Projects from './projects';
import { useParams } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import PublishIcon from '@material-ui/icons/Publish';
import ImageUploader from 'react-images-upload';
import imageToBase64 from 'image-to-base64'
import '../App.css'
import BootstrapCard from 'react-bootstrap/Card'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import 'animate.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit(props) {

    const history = useHistory()
    const [projects, setProjects] = useState([])
    const [text, setText] = useState()
    const [upload, setUpload] = useState(false)
    const [image, setImage] = useState()
    const [images, setImages] = useState([])
    const [show, setShow] = useState(false)

    const email = localStorage.getItem('email')
    const id = useParams('id')['id']


    useEffect(() => {
        const fetchData = async () => {
            const data = await getProjects({ id, action: "GET_BY_ID" })
            console.log(data['result'])
            setProjects([data['result']])
            const data_image = await getImage({ id, action: "GET_IMAGE_BY_ID" })
            if (data_image['result'] !== 'Failure') {
                for (let index = 0; index < data_image['result'].length; index++) {
                    if ('worktype' in data_image['result'][index] && 'contractor' in data_image['result'][index] && 'description' in data_image['result'][index]) {
                        console.log(true)
                        setShow(true)
                    }
                }

                setImages(data_image['result'])
            }

        }
        fetchData()
    }, [images.length])

    const editImage = (CADid, img) => {
        history.push({
            pathname: `/filterCAD/${CADid}/${id}`,
            state: { detail: img }
        })
    }

    const AddProjects = () => {
        history.push('/addProjects')
    }
    const handleChange = (event) => {
        setImage(event[0])
        setUpload(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(image)
        const data = new FormData();
        data.append('file', image, image.name);
        data.append('name',image.name)
        data.append('id', id)
        data.append('type', image.type)
        const res = await addImage(data)
        if (res.result === "success") {
            toast.success("CAD Uploaded. Please Refresh Page !")
            const notify = await getProjects({ email, notification: `Uploaded CAD : ${image.name}` ,action: "NOTIFICATION" })

        }
    }

    return (
        <div>
            <Navbar />
            <ToastContainer />
            {projects.map((proj) => {
                return (
                    <Card
                        key={proj._id}
                        style={{ margin: 20, width: '95%' }}
                        type="inner"
                        extra={<div><ImageUploader
                        accept={"application/pdf, image/*"}
                            withPreview={true}
                            withLabel={true}
                            withIcon={true}
                            buttonText='Select Image'
                            singleImage={true}
                            onChange={(event) => handleChange(event)}
                            imgExtension={['.jpg', '.gif', '.png', '.jiff', '.dwg','.pdf']}
                            maxFileSize={5242880}
                        />{upload ? <Fab style={{ marginLeft: '60px' }} variant='extended' color='primary' size='large' onClick={handleSubmit} >Upload</Fab> : <></>}</div>}
                    >

                        {/* <b>Description</b> : {proj.description}
                        {proj.worktypes.map((work) => (
                            <li> <b>Worktype</b> : {work} </li>
                        ))}
                        {proj.contractors.map((con) => (
                            <li> <b>Contractor</b> : {con} </li>
                        ))}
                        {proj.users.map((usr) => (
                            <li> <b>User</b> : {usr}</li>
                        ))} */}
                    </Card>
                )
            })}
            <div style={{ content: "", clear: 'both', display: 'table' }}>
                {images.map((img, index) => (
                    <div key={index} style={{ marginLeft: '40px', float: 'left', width: '30%', paddign: '50px', marginTop: '20px' }}>
                        {show ? <BootstrapCard className="anime" style={{ width: '400', height: '300' }}>
                            <BootstrapCard.Img style={{ cursor: 'grabbing'}} onClick={() => editImage(img._id, img.image)} variant="top" src={img['image']} />
                            <BootstrapCard.Body>
                                {/* <BootstrapCard.Text>
                                    {img['worktype'] !== undefined ? img['worktype'].map((work) => (
                                        <li> <b>Worktype</b> : {work} </li>
                                    )) : null}
                                    {img['contractor'] !== undefined ? img['contractor'].map((con) => (
                                        <li> <b>Contractor</b> : {con} </li>
                                    )) : null}
                                </BootstrapCard.Text> */}
                                <Fab size={"medium"} style={{
                                    marginLeft:120
                                }} variant="extended" color="primary" onClick={() => editImage(img._id, img.image)}> Open Drawing </Fab>
                            </BootstrapCard.Body>
                        </BootstrapCard> : <img src={img['image']} style={{ cursor: 'grabbing' }} width="400px" height="300px" onClick={() => editImage(img._id, img.image)} />}
                    </div>
                ))}
            </div>
            <Fab style={{ position: 'fixed', right: '2%' }} onClick={AddProjects} color="primary" aria-label="add"><AddIcon /></Fab>
        </div>
    );
}

