import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { add_to_todays_outfit } from '../styles/icons.js';
import AddClothPopUp from './AddClothPopUp.js';
import { addNewCloth } from '../api/api.js'

function ClothContainer({ imageUrl, activity, eventTypes, clothType, mongoID, type, event, selectedDate, selectedChoices }) {
  const history = useHistory();

  const [openProfile, setOpenProfile] = useState(false);
  const [selectedImage,] = useState(imageUrl);
  const [clothTypeFinal, setClothTypeFinal] = useState(type)
  const [eventTypeFinal, setEventTypeFinal] = useState(event)

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  }
  const handleAddToToday = async () => {
    await addNewCloth(mongoID, activity, selectedDate)
    const queryParam = `?activity=${activity}&selectedDate=${selectedDate}`;
    const path = '/' + queryParam;
    history.push(path); // Navigate to the new URL    
  }

  if (openProfile) {
    return ReactDOM.createPortal(
      <AddClothPopUp selectedImage={selectedImage} onClose={handleOpenProfile} eventTypes={eventTypes} clothType={clothType} forEdit={true} clothesType={clothTypeFinal} clothesActivities={eventTypeFinal} mongoID={mongoID} setClothTypeFinal = {setClothTypeFinal} setEventTypeFinal={setEventTypeFinal} />,
      document.getElementById('root-portal')
    );
  }


  return (
    <div className='cloth-container'>
      <img className='cloth-image' src={`${imageUrl}`} alt='cloth' onClick={handleOpenProfile} />
      <button className='cloth-to-outfit' onClick={handleAddToToday}>
        {add_to_todays_outfit}
      </button>
    </div>
  );
}

export default ClothContainer;
