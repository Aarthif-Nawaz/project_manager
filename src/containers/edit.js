import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'
import { addProject, getProjects, addImage } from '../service'
import Projects from './projects';
import { useParams } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import PublishIcon from '@material-ui/icons/Publish';
import ImageUploader from 'react-images-upload';
import imageToBase64 from 'image-to-base64'

function Edit(props) {

    const history = useHistory()
    const [projects, setProjects] = useState([])
    const [text, setText] = useState()
    const [upload, setUpload] = useState(false)
    const [image, setImage] = useState()
    const [images,setImages] = useState([])

    const email = localStorage.getItem('email')
    const id = useParams('id')['id']

    const fetchData = async () => {
        setImages([])
        const data = await getProjects({ id, action: "GET_BY_ID" })
        console.log(data['result'])
        setProjects([data['result']])
        if ('images' in data['result']) {
            for (let index = 0; index < data['result']['images'].length; index++) {
                let imageUrl = data['result']['images'][index]
                images.push(imageUrl)
                setImages([...images])
            }
        }
        else {
            console.log(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

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
        data.append('id',id)
        data.append('type',image.type)
        const res = await addImage(data)
        if(res.result === "success"){
            console.log("success")
        }
    }

    return (
        <div>
            <Navbar />

            {projects.map((proj) => {
                return (
                    <Card
                        key={proj._id}
                        style={{ margin: 20, width: '95%' }}
                        type="inner"
                        title={"Project Name : " + proj.name}
                        extra={<div><ImageUploader
                            withPreview={true}
                            withLabel={true}
                            withIcon={true}
                            buttonText='Select Image'
                            singleImage={true}
                            onChange={(event) => handleChange(event)}
                            imgExtension={['.jpg', '.gif', '.png', '.jiff']}
                            maxFileSize={5242880}
                        />{upload ? <Fab style={{ marginLeft: '60px' }} variant='extended' color='primary' size='large' onClick={handleSubmit} >Upload</Fab> : <></>}</div>}
                    >

                        <b>Description</b> : {proj.description}
                        {proj.worktypes.map((work) => (
                            <li> <b>Worktype</b> : {work} </li>
                        ))}
                        {proj.contractors.map((con) => (
                            <li> <b>Contractor</b> : {con} </li>
                        ))}
                        {proj.users.map((usr) => (
                            <li> <b>User</b> : {usr}</li>
                        ))}
                    </Card>
                )
            })}
            {images.map((img, index) => (
                <div key={index}>
                    <img src={img} width="200" height="200" onClick={() => console.log(img)} />
                </div>
            ))}
            <Fab style={{ position: 'fixed', right: '2%' }} onClick={AddProjects} color="primary" aria-label="add"><AddIcon /></Fab>
        </div>
    );
}

export default Edit;