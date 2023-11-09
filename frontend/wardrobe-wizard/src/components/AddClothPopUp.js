import React, { useState, useEffect } from 'react';
import '../styles/AddClothPopUp.css';
import { go_back, edit_add_today } from '../styles/icons.js';
import { uploadPhotoAPI } from '../api/api.js'
import ChooseEventType from './ChooseEventType.js';

function AddClothPopUp({ selectedFile, selectedImage, onClose, eventTypes, clothType, forEdit, clothesType, clothesActivities }) {
  // whether or not click on to select desired event
  const [isChooseEventTypeOpen, setIsChooseEventTypeOpen] = useState(false);
  // whether or not click on to select desired activities
  const [isChooseClothTypeOpen, setIsChooseClothTypeOpen] = useState(false);

  const handleSelectActivity = (e) => {
    e.preventDefault();
    setIsChooseEventTypeOpen(!isChooseEventTypeOpen);
  }

  const handleSelectClothType = (e) => {
    e.preventDefault();
    setIsChooseClothTypeOpen(!isChooseClothTypeOpen);
  }

  const handleUploadImage = async () => {
    await uploadPhotoAPI(selectedFile)
    window.location.reload();
  }

  const handleChangeType = () => {

  }

  const handleChangeActivity = () => {

  }

  return (
    <div className="add-cloth-popup-flame">
      <div className="add-cloth-popup">
        <div className="add-cloth-pop-up-back">
          <h3>Add to Closet</h3>
          <button className="back-arrow" onClick={onClose}>back</button>
        </div>
        <div className="image-block">
          <img className="uploaded-image" src={selectedImage} alt="Selected Cloth" />
        </div>
        <div className="add-cloth-attribute-container">
          <div className="add-cloth-attribute">
            <div className="add-cloth-attribute-label">Type</div>
            <div className="add-cloth-attribute-input">
              <div className='tags'>
                <button className="tag">Top</button>
              </div>
              <button className="edit" onClick={handleSelectClothType}>{edit_add_today}</button>
            </div>
          </div>
          <div className="add-cloth-attribute">
            <div className="add-cloth-attribute-label">Activity</div>
            <div className="add-cloth-attribute-input">
              <div className='tags'>
                <button className="tag">Casual</button>
              </div>
              <button className="edit" onClick={handleSelectActivity}>{edit_add_today}</button>
            </div>
          </div>
        </div>
        <div className="btns">
          {/* {forEdit ? <button className="btn-add">Save</button> : <button className="btn-add" onClick={handleUploadImage}>Add to Closet</button>} */}
          {forEdit ? <button className="btn-add">Save</button> : <button className="btn-add" onClick={handleUploadImage}>Add to Closet</button>}
          {forEdit ? <button className="btn-cancel">Delete</button> : <button className="btn-cancel" onClick={onClose}>Cancel</button>}
        </div>
        {isChooseEventTypeOpen && <ChooseEventType handleAddToOutfit={handleChangeActivity} handleClosePopUp={handleSelectActivity} eventTypes={eventTypes} type={'activity'} />}
        {isChooseClothTypeOpen && <ChooseEventType handleAddToOutfit={handleChangeType} handleClosePopUp={handleSelectClothType} eventTypes={clothType} type={'clothes'} />}
      </div>
    </div>
  );
}

export default AddClothPopUp;
