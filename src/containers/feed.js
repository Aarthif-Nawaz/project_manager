import React from 'react';
import Navbar from '../components/Navbar'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from 'react-router-dom'
function Feed(props) {
    
    const history = useHistory()
    
    const AddProjects = () => {
        history.push('/addProjects')
    }
    
    return (
        <div>
            <Navbar />
            <h1>Notifications & Feeds</h1>
            <Fab style={{position:'fixed', right:'2%'}} onClick={AddProjects} color="primary" aria-label="add"><AddIcon /></Fab>
        </div>
    );
}

export default Feed;