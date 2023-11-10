import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { add_to_todays_outfit } from '../styles/icons.js';
import AddClothPopUp from './AddClothPopUp.js';
import { addNewCloth } from '../api/api.js'

function ClothContainer({ imageUrl, activity, eventTypes, clothType, mongoID, type, event }) {
  const history = useHistory();

  const [openProfile, setOpenProfile] = useState(false);
  const [selectedImage,] = useState(imageUrl);
  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  }
  const handleAddToToday = async () => {
    console.log('HERE', mongoID, activity)
    await addNewCloth(mongoID, activity)
    history.push('/'); // Navigate to the new URL    
  }

  if (openProfile) {
    return ReactDOM.createPortal(
      <AddClothPopUp selectedImage={selectedImage} onClose={handleOpenProfile} eventTypes={eventTypes} clothType={clothType} forEdit={false} clothesType={type} clothesActivities={event} mongoID={mongoID}/>,
      document.getElementById('root-portal')
    );
  }


  return (
    <div className='cloth-container'>
      <img className='cloth-image' src={imageUrl} alt='cloth' onClick={handleOpenProfile} />
      <button className='cloth-to-outfit' onClick={handleAddToToday}>
        {add_to_todays_outfit}
      </button>
    </div>
  );
}

export default ClothContainer;
