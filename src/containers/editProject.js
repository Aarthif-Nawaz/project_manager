import React, { useState, useEffect } from 'react';
import '../components/Form/Form.css';
import Button from 'react-bootstrap/Button'
import { addProject } from '../service'
import {useHistory, useParams} from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProject() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [currentworktypes, setCurrentworktypes] = useState('')
  const [currentContractors, setCurrentContractors] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [worktypes, setWorktypes] = useState([])
  const [contractors, setContractors] = useState([])
  const [users, setUsers] = useState([])

  const history = useHistory()
  const email = localStorage.getItem('email')

  const id = useParams('id')['id']

  useEffect(() => {
    const fetchData = async() => {
        const data = await addProject({id, action: "GET_BY_ID"})
        if(data['result'] !== "Failure"){
            console.log(data['result'])
            setName(data['result']['name'])
            setDescription(data['result']['description'])
            setWorktypes(data['result']['worktypes'])
            setContractors(data['result']['contractors'])
            setUsers(data['result']['users'])
        }
    }
    fetchData()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if (!name.trim().length || !description.trim().length || worktypes.length === 0 || contractors.length === 0 || users.length === 0) {
        toast.error('Please fill in all fields')
      }
      else {
        const data = await addProject({ id, name, description, worktypes, contractors, users, action: "UPDATE_PROJECT_BY_ID" })
        if (data.result === "failure") {
          toast.error('An error occurred !')
        }
        else{
          const notify = await addProject({ email, notification: `Project Edited : Name ${name}` ,action: "NOTIFICATION" })
          if(notify.result === "success"){
            history.push('/project')
          }
          else{
            toast.error('An error occurred !')
          }
         
        }
      } 
    }
    catch(e){
      console.log(e)
      
    }
  }

  const deleteItem = (item,type) => {
    if(type=="work"){
      const index = worktypes.indexOf(item);
      worktypes.splice(index, 1);
      setWorktypes([...worktypes])
      
    }
    else if(type == "contractor"){
      const index = contractors.indexOf(item);
      contractors.splice(index, 1);
      setContractors([...contractors])
    }
    else{
      const index = users.indexOf(item);
      users.splice(index, 1);
      setUsers([...users])
    }
  }

  const AddWork = (currentworktypes, type) => {
    if (type === "work") {
      worktypes.push(currentworktypes)
      setWorktypes([...worktypes])
    }
    else if (type === "contract") {
      contractors.push(currentworktypes)
      setContractors([...contractors])
    }
    else if (type === "user") {
      users.push(currentworktypes)
      setUsers([...users])
    }


  }



  return (
    <div className='form-content-right' style={{overflowY:'scroll', overflowX:'scroll'}}>
      <ToastContainer />
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter Project Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Description</label>
          <textarea
            className='form-input'
            rows={6}
            cols={10}
            placeholder='Enter Project Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Worktypes</label>
          <input
            className='form-input'
            type='text'
            name='Worktypes'
            placeholder='Add Project Worktypes'
            value={currentworktypes}
            onChange={(e) => setCurrentworktypes(e.target.value)}
          />
          
          {worktypes.length > 0 ? worktypes.map(work => (
            <Fab color={'primary'} size={'small'} variant={'extended'}>{work} <DeleteIcon onClick={() => deleteItem(work, "work")} /></Fab>
          )) : ''}
          <div style={{left: 520,
            position: 'absolute',
            bottom: 300}}>
          <Button style={{
            backgroundColor: "thistle",
            width: 70,
            height: 30,

          }} variant={'primary'} onClick={() => AddWork(currentworktypes, "work")}> Add </Button>
          </div>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contracters</label>
          <input
            className='form-input'
            type='text'
            name='contractors'
            placeholder='Add Project Contractos'
            onChange={(e) => setCurrentContractors(e.target.value)}
          />
          {contractors.length > 0 ? contractors.map(con => (
            <Fab color={'primary'} size={'small'} variant={'extended'}>{con} <DeleteIcon onClick={() => deleteItem(con, "contractor")} /></Fab>
          )) : ''}
          <Button style={{
            backgroundColor: "thistle",
            width: 70,
            height: 30,
            left: 520,
            position: 'absolute',
            bottom: 220
          }} variant={'primary'} onClick={() => AddWork(currentContractors, "contract")}> Add </Button>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Users</label>
          <input
            className='form-input'
            type='text'
            name='users'
            placeholder='Add Project Users'
            onChange={(e) => setCurrentUser(e.target.value)}
          />
          {users.length > 0 ? users.map(usr => (
            <Fab color={'primary'} size={'small'} variant={'extended'}>{usr} <DeleteIcon onClick={() => deleteItem(usr, "user")} /></Fab>
          )) : ''}
          <Button style={{
            backgroundColor: "thistle",
            width: 70,
            height: 30,
            left:520,
            position: 'absolute',
            bottom: 140
          }} variant={'primary'} onClick={() => AddWork(currentUser, "user")}> Add </Button>
        </div>

        <button className='form-input-btn' type='submit'>
          Edit Project
        </button>
      </form>
    </div>
  );
};

export default EditProject;

