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
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import 'animate.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from "jspdf";
export default function ModalForm(props) {

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
    const [description, setDescription] = useState('')
    const [currentvalue, setCurrentvalue] = useState(new Date());
    const id = useParams('id')['id']
    const project_id = useParams('project_id')['project_id']
    const image = props.image

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(40);
        doc.text(30, 20, 'Filtered CAD Drawing !');
        doc.addImage(image, 'JPEG', 15, 40, 180, 160);
        doc.output('CADImage');
        doc.text(30, 220, `Worktype :  ${worktype}`);
        doc.text(30, 240, `Contractor :  ${contractor}`);
        doc.text(30, 260, `Description :  ${description}`);
        doc.text(30, 280, `Date :  ${currentvalue}`);
        doc.save(`CAD.pdf`);
    }

    const fetchData = async () => {
        const data = await getProjects({ id: project_id, action: "GET_BY_ID" })
        console.log(data['result'])
        setProjects([data['result']])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getImage({id : id, worktype, contractor, description, image, action: "UPDATE_IMAGE_BY_ID"})
        if (data['result'] == "failure"){
            toast.error('An error occurred')
        }
        else{
            
            toast.success('Successfull Filtered CAD')
        }
    }

    useEffect(() => {
        console.log(currentvalue)
        fetchData()
    }, [])
    return (
        <Modal size="xl" show={props.open} onHide={props.handleClose} className="modal-container custom-map-modal" animation={true}>
            <ToastContainer />
            <ModalHeader closeButton>
                <Fab size={"large"} variant="extended" color="primary" onClick={generatePDF}>Generate PDF</Fab>
                <ModalTitle style={{
                    marginLeft:350
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
                            {projects.map((proj) => (
                                proj.contractors.map((con) => (
                                    <MenuItem value={con}>{con}</MenuItem>
                                ))
                            ))}
                        </Select>
                    </FormControl>
                    <div style={{marginLeft: -10}}>
                    <label className='form-label'>Description</label>
                    <textarea
                        className='form-input'
                        rows={6}
                        cols={20}
                        placeholder='Enter Project Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    </div>
                   <label className='form-label'>Date</label>
                    <input type="date" value={currentvalue} onChange={(e) => setCurrentvalue(e.target.value)} />
                </form>
            </ModalBody>
            <ModalFooter>
                <Fab color="primary" size="large" variant="extended" onClick={handleSubmit}>
                    Save Markings
                </Fab>
            </ModalFooter>
        </Modal>
    );
}

