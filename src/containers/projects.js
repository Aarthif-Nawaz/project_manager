import React, { useContext, useEffect, useState } from 'react';
import { getProjects } from '../service'
import Navbar from '../components/Navbar'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Card } from 'antd';

function Projects(props) {

    const [projects, setProjects] = useState([])
    const email = localStorage.getItem('email')

    const history = useHistory()

    const AddProjects = () => {
        history.push('/addProjects')
    }

    const deleteProject = async(id, name) => {
        const data = await getProjects({ id, action: "DELETE_PROJECT" });
        if(data['result'] === "success"){
            fetchData()
            const notify = await getProjects({ email, notification: `${new Date()} -  Deleted Project : Project ${name}` ,action: "NOTIFICATION" })
            
        }
        
    }

    const fetchData = async () => {
        try {
            const data = await getProjects({ email, action: "GET" });
            if(data['result'] !== "Failure"){
                setProjects(data['result'])
            }
            console.log(projects)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {   
        fetchData()
    },[projects.length])
    
    return (
        <div>
            <Navbar />
            {projects.map((proj, index) => (
                <Card
                    key={index}
                    style={{ margin: 25, width: '80%' }}
                    type="inner"
                    title={proj.name}
                    extra={<div><a href={`/edit/${proj._id}`}>Edit</a><a style={{color:'red', marginLeft:'10px'}} onClick={() => deleteProject(proj._id, proj.name)}>Delete</a></div>}
                >

                    Description : {proj.description}
                    {proj.worktypes.map((work) => (
                        <li> Worktype : {work} </li>
                    ))}
                    {proj.contractors.map((con) => (
                        <li> Contractor : {con} </li>
                    ))}
                    {proj.users.map((usr) => (
                        <li> User : {usr}</li>
                    ))}
                </Card>
            ))}
            <Fab style={{ position: 'fixed', right: '2%' }} onClick={AddProjects} color="primary" aria-label="add"><AddIcon /></Fab>
        </div >
    );
}

export default Projects;