import React, { useState } from 'react';
import { add_to_todays_outfit } from '../styles/icons.js';
import AddClothPopUp from './AddClothPopUp.js';

function ClothContainer({ imageUrl, handleAddToToday, eventTypes, clothType }) {
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedImage,] = useState(imageUrl);
  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  }

  return (
    <div className='cloth-container'>
      <img className='cloth-image' src={imageUrl} alt='cloth' onClick={handleOpenProfile} />
      <button className='cloth-to-outfit' onClick={handleAddToToday}>
        {add_to_todays_outfit}
      </button>
      {openProfile && <AddClothPopUp selectedImage={selectedImage} onClose={handleOpenProfile} eventTypes={eventTypes} clothType={clothType} forEdit={false} />
      }
    </div>
  );
}

export default ClothContainer;
