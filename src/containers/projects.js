import React, { useContext, useEffect, useState } from 'react';
import { getProjects } from '../service'
import Navbar from '../components/Navbar'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.success(`Successfully Deleted Project :  ${id}`)
            fetchData()
            const notify = await getProjects({ email, notification: `Deleted Project : Project ${name}` ,action: "NOTIFICATION" })
        }
        else{
            toast.error("An error occurred while deleting. Please try again ")
        }
        
    }

    const fetchData = async () => {
        let arr = []
        try {
            const data = await getProjects({ email, action: "GET" });
            if(data['result'] !== "Failure"){
                for (let index = 0; index < data['result'].length; index++) {
                    arr.push(data['result'][index])    
                }

            }
            const data_user = await getProjects({user:email, action: "GET_BY_USER"})
            if(data_user['result'] != "Failure"){
                for (let index = 0; index < data_user['result'].length; index++) {
                    arr.push(data_user['result'][index])    
                }
                // setProjects(data_user['result'])
            }
            setProjects(arr)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {   
        fetchData()
    },[])
    
    return (
        <div>
            <Navbar />
            <ToastContainer />
            {projects.map((proj, index) => (
                <Card
                    key={index}
                    style={{ margin: 25, width: '80%'}}
                    type="inner"
                    title={proj.name}
                    extra={<div><a style={{color:'green', marginRight:'20px', fontSize:18, fontWeight: 'bold', textDecoration:'none'}} href={`/editProject/${proj._id}`}>Edit Project </a><a style={{marginRight:'20px', fontSize:18, fontWeight: 'bold', textDecoration:'none'}} href={`/edit/${proj._id}`}>Edit</a><a style={{color:'red', marginLeft:'20px', fontSize:18, fontWeight: 'bold', textDecoration:'none'}} onClick={() => deleteProject(proj._id, proj.name)}>Delete</a></div>}
                >
                    

                    {/* Description : {proj.description}
                    {proj.worktypes.map((work) => (
                        <li> Worktype : {work} </li>
                    ))}
                    {proj.contractors.map((con) => (
                        <li> Contractor : {con} </li>
                    ))}
                    {proj.users.map((usr) => (
                        <li> User : {usr}</li>
                    ))} */}
                </Card>
            ))}
            <Fab style={{ position: 'fixed', right: '2%' }} onClick={AddProjects} color="primary" aria-label="add"><AddIcon /></Fab>
        </div >
    );
}

export default Projects;