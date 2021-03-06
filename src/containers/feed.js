import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'
import BootstrapCard from 'react-bootstrap/Card'
import { getProjects } from '../service'

function Feed(props) {
    const [feed, setFeeds] = useState([])
    const email = localStorage.getItem('email')
    const history = useHistory()

    const AddProjects = () => {
        history.push('/addProjects')
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await getProjects({ email, action: "GET_NOTIFICATION" })
                if ('notifications' in data['result']){
                    setFeeds(data['result']['notifications'])
                }
            }
            catch(e){
                console.log(e)
            }
           
            
            
        }
        fetchData()
    }, [feed.length])

    return (
        <div>
            <Navbar />
            {feed.length > 0 ? feed.map((f) => (
                <div style={{
                    margin:20,
                }}>
                <BootstrapCard >
                    <BootstrapCard.Body>{f}</BootstrapCard.Body>
                </BootstrapCard>
                </div>
            )) : null}
        </div>
    );
}

export default Feed;