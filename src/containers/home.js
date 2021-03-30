import React from 'react';
import Navbar from '../components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Form from '../components/Form/Form'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
function home(props) {
    return (
        <div>
            <Navbar />
            {/* <Carousel autoFocus={true} autoPlay={true} } emulateTouch={true} infiniteLoop={true} >
                <div>
                    <img src={Image_1} />
                    <p className="legend">Electrical Engineering and Electronics.</p>
                </div>
                <div>
                    <img src={Image_2} />
                    <p className="legend">Engineering - Architectural.</p>
                </div>
                <div>
                    <img src={Image_3} />
                    <p className="legend">Industrial Engineering.</p>
                </div>
                <div>
                    <img src={Image_4} />
                    <p className="legend">Manufacturing Engineering.</p>
                </div>
                <div>
                    <img src={Image_5} />
                    <p className="legend">Mechanical Engineering</p>
                </div>
            </Carousel> */}
            <Form />
        </div>
    );
}

export default home;