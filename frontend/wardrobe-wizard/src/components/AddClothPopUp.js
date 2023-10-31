import React, { useState } from 'react';
import '../styles/AddClothPopUp.css';
import { go_back, edit_add_today } from '../styles/icons.js';
import ChooseEventType from './ChooseEventType.js';

function AddClothPopUp({ selectedImage, onClose, eventTypes, forRecommendation }) {
  const [isChooseEventTypeOpen, setIsChooseEventTypeOpen] = useState(false);
  const handleSelectActivity = (e) => {
    e.preventDefault();
    setIsChooseEventTypeOpen(!isChooseEventTypeOpen);
  }
  const handleUploadImage = () => {
  }

  return (
    <div className="add-cloth-popup">
      <button onClick={onClose}>{go_back}</button>
      <img className="uploaded-image" src={selectedImage} alt="Selected Cloth" />
      <form className="add-clot-attribute">
        <div className="add-cloth-attribute-container">
          <div className="add-cloth-attribute">
            <label className="add-cloth-attribute-label">Type</label>
            <input className="add-cloth-attribute-input" type="text" />
          </div>
          <div className="add-cloth-attribute">
            <label className="add-cloth-attribute-label">Activity</label>
            <input className="add-cloth-attribute-input" type="text" />
            <button className="add-cloth-attribute-button" onClick={handleSelectActivity}>{edit_add_today}</button>
          </div>
        </div>
        {!forRecommendation ? <button className="add-cloth-attribute-button">Save</button> : <button className="add-cloth-attribute-button">Add to Closet</button>}
      </form>
      {isChooseEventTypeOpen && <ChooseEventType handleAddToOutfit={handleUploadImage} handleClosePopUp={handleSelectActivity} eventTypes={eventTypes} />}
    </div>
  );
}

export default AddClothPopUp;
