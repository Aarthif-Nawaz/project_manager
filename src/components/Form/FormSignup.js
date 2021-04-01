import React, { useState } from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button'
import { addProject } from '../../service'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import 'animate.css'
import {useHistory} from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete';

function FormSignup() {

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if (!name.trim().length || !description.trim().length || worktypes.length === 0 || contractors.length === 0 || users.length === 0) {
        store.addNotification({
          title: "Error",
          message: 'Please Fill in All Fields',
          type: "danger",
          insert: "bottom",
          container: "bottom-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
            showIcon: true
          },
          width: 400
        });
      }
      else {
        const data = await addProject({ email, name, description, worktypes, contractors, users, action: "Add" })
        if (data.result === "failure") {
          store.addNotification({
            title: "Error",
            message: 'An Error Occurred',
            type: "danger",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
              showIcon: true
            },
            width: 400
          });
        }
        else{
          history.push('/project')
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
          Add Project
        </button>
      </form>
    </div>
  );
};


export default FormSignup;
