import React, { useState } from 'react';
import InputDetailsForm from './InputDetailsForm';
import './PhotoInput.css';

const PhotoInput = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePhotoInputClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="photo-input-container"> {/* correct class name here */}
      <div className="photo-input" onClick={handlePhotoInputClick}>
        <div className="plus-symbol">+</div>
        <div className="add-photo-text">Add your photo</div>
      </div>
      {showModal && <InputDetailsForm onClose={handleCloseModal} />}
      {showModal && <div className="dark-overlay" onClick={handleCloseModal} />}
    </div>
  );
};

export default PhotoInput;
