import React, { useState } from 'react';
import './Form.css';
import EditProject from '../../containers/editProject';
import FormSuccess from './FormSuccess';
import Image_1 from '../../Assets/image4.jpg'
const EditForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={Image_1} alt='CAD' />
        </div>
        {!isSubmitted ? (
          <EditProject  submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default EditForm;
