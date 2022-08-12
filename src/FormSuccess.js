import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>You have been signed up successfully!</h1>
      <img className='form-img-2' src='img/checked.png' alt='success-image'/>
    </div>
  );
};

export default FormSuccess;
