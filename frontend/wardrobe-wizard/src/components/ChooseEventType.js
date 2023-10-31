import React from 'react';
import '../styles/ChooseEventType.css';

function ChooseEventType({ handleAddToOutfit, handleClosePopUp, eventTypes }) {

  return (
    <div className='add-to-today-popup'>
      <div className='add-to-today-popup-content'>
        <div className='add-to-today-popup-buttons'>
          {eventTypes.map(choice => {
            return (
              <button className='selected-choice-button'>{choice}</button>
            )
          })}
        </div>
        <div className='add-to-today-popup-action-buttons'>
          <button className='add-to-today-popup-button' onClick={handleAddToOutfit}>
            Confirm
          </button>
          <button className='add-to-today-popup-button' onClick={handleClosePopUp}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseEventType;
