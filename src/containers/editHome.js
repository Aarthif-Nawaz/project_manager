import React from 'react';
import Navbar from '../components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import EditForm from '../components/Form/editForm'
function EditHome(props) {
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
            <EditForm />
        </div>
    );
}

export default EditHome;