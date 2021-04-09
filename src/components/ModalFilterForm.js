import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { getProjects, getImage } from '../service'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from "jspdf";
export default function ModalFilterForm(props) {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [projects, setProjects] = useState([])
    const [worktype, setWorktype] = useState('')
    const [contractor, setContractor] = useState('')
    
    const id = useParams('id')['id']
    const project_id = useParams('project_id')['project_id']
    const image = props.image
    const element = props.element
    
    const email = localStorage.getItem('email')


    const fetchData = async () => {
        const data = await getProjects({ id: project_id, action: "GET_BY_ID" })
        console.log(data['result'])
        setProjects([data['result']])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let arr = []
        const data_image = await getImage({ id: id, action: "GET_IMAGE_BY_IDs" })
        if (contractor === "" &&  worktype == ""){
            toast.error("Plesae Select a filed")
        }
        else if (contractor !== "" && worktype !== ""){
            for (let index = 0; index < data_image['result']['contractor'].length; index++) {
                if(data_image['result']['contractor'][index] === contractor && data_image['result']['worktype'][index] === worktype){
                    const id = data_image['result']['elements'][index][0]['id']
                    const x1 = data_image['result']['elements'][index][0]['x1']
                    const y1 = data_image['result']['elements'][index][0]['y1']
                    const x2 = data_image['result']['elements'][index][0]['x2']
                    const y2 = data_image['result']['elements'][index][0]['y2']
                    props.filteredCAD(id,x1,x2,y1,y2)
                }
                
            }
        }
        else if (contractor !== ""){
            for (let index = 0; index < data_image['result']['contractor'].length; index++) {
                if(data_image['result']['contractor'][index] === contractor){
                    const id = data_image['result']['elements'][index][0]['id']
                    const x1 = data_image['result']['elements'][index][0]['x1']
                    const y1 = data_image['result']['elements'][index][0]['y1']
                    const x2 = data_image['result']['elements'][index][0]['x2']
                    const y2 = data_image['result']['elements'][index][0]['y2']
                    props.filteredCAD(id,x1,x2,y1,y2)
                }
                
            }
        }
        else if (worktype !== ""){
            for (let index = 0; index < data_image['result']['worktype'].length; index++) {
                if(data_image['result']['worktype'][index] === worktype){
                    const id = data_image['result']['elements'][index][0]['id']
                    const x1 = data_image['result']['elements'][index][0]['x1']
                    const y1 = data_image['result']['elements'][index][0]['y1']
                    const x2 = data_image['result']['elements'][index][0]['x2']
                    const y2 = data_image['result']['elements'][index][0]['y2']
                    props.filteredCAD(id,x1,x2,y1,y2)
                }
                
            }

        }
        const notify = await getProjects({ email, notification: `${new Date()} -  Filtered Marking` ,action: "NOTIFICATION" }) 
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Modal size="xl" show={props.open} onHide={props.handleClose} className="modal-container custom-map-modal" animation={true}>
            <ToastContainer />
            <ModalHeader closeButton>
                <ModalTitle style={{
                    marginLeft:500
                }}>Filter CAD</ModalTitle>
            </ModalHeader>
            <ModalBody style={{
                height: 300
            }} className="w-100 p-3" >
                <form onSubmit={handleSubmit} className='form' noValidate>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Worktype</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={worktype}
                            onChange={(e) => setWorktype(e.target.value)}
                        >
                            <MenuItem value={""}>None</MenuItem>

                            {projects.map((proj) => (
                                proj.worktypes.map((work) => (
                                    <MenuItem value={work}>{work}</MenuItem>
                                ))
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Contractor</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={contractor}
                            onChange={(e) => setContractor(e.target.value)}
                        >
                            <MenuItem value={""}>None</MenuItem>
                            {projects.map((proj) => (
                                proj.contractors.map((con) => (
                                    <MenuItem value={con}>{con}</MenuItem>
                                ))
                            ))}
                        </Select>
                    </FormControl>
                </form>
            </ModalBody>
            <ModalFooter>
                <Fab color="primary" size="large" variant="extended" onClick={handleSubmit}>
                    Filter Markings
                </Fab>
            </ModalFooter>
        </Modal>
    );
}

