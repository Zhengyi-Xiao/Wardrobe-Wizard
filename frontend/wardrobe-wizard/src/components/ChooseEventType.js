import React, { useState } from 'react';
import '../styles/ChooseEventType.css';

function ChooseEventType({ handleAddToOutfit, handleClosePopUp, eventTypes, type }) {

  const [selectedTypes, setSelectedTypes] = useState([]);
  const handleAddChoice = choice => {
    if (type.includes('clothes')) {
      setSelectedTypes([choice])
    } else {
      setSelectedTypes([choice, ...selectedTypes])
    }
  }
  const handleRemoveChoice = choice => {
    const updatedChoices = selectedTypes.filter(c => c !== choice)
    if (updatedChoices.length === 0 && type === 'clothes') {
      setSelectedTypes(['All', ...updatedChoices]);
    } else {
      setSelectedTypes([]);
    }
    setSelectedTypes(updatedChoices);
  }
  return (
    <div className='add-to-today-popup'>
      <div className='popup-frame'>
        <div className='add-to-today-popup-heading'>
          {type === 'clothes' ? 'Select A Clothes Type' : 'Select Activities'}
        </div>
        <div className='add-to-today-popup-buttons'>
          {eventTypes.filter((choice) => !(choice === 'All')).map((choice, index) => {
            if (selectedTypes.includes(choice)) {
              return (
                <button key={index} className={`${type}-choice-button selected `} onClick={() => handleRemoveChoice(choice)}>{choice}</button>
              )
            } else {
              return (
                <button key={index} className={`${type}-choice-button unselected`} onClick={() => handleAddChoice(choice)}>{choice}</button>
              )
            }
          })}
        </div>
        <div className='btns'>
          <button className='confirm-btn' onClick={(event) => handleAddToOutfit(event, selectedTypes)}>
            Confirm
          </button>
          <button className='cancel-btn' onClick={handleClosePopUp}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseEventType;
