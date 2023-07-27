import React from 'react';
import './InputDetailsForm.css';

const InputDetailsForm = ({ onClose }) => {
  // Dummy state to store form data
  const [formData, setFormData] = React.useState({
    displayName: '',
    email: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
    
    onClose();
  };
  
  

  return (
    <div className="input-details-form">
      <div className="close-button" onClick={onClose}>
        &times;
      </div>
      <div className="form-content">
        <h2>Add your photo</h2>
        <p className="description">Please fill out the following information.</p>
        <p className='required'>* Indicates a required field.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="displayName">Display Name *</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="checkbox-input"
            />
            <label htmlFor="agreeToTerms">
              I agree to the Privacy Policy & Terms and Conditions
            </label>
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default InputDetailsForm;