import React from 'react';
import Navbar from '../components/Navbar'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from 'react-router-dom'
function Edit(props) {
    
    const history = useHistory()
    
    const AddProjects = () => {
        history.push('/addProjects')
    }
    
    return (
        <div>
            <Navbar />
            <h1>Edit</h1>
            <Fab style={{position:'absolute', right:'2%', bottom:-170}} onClick={AddProjects} color="primary" aria-label="add"><AddIcon /></Fab>
        </div>
    );
}

export default Edit;