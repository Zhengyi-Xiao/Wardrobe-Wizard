import React, { useState } from 'react';
import '../styles/ChooseEventType.css';

function ChooseEventType({ handleAddToOutfit, handleClosePopUp, eventTypes, type, chosen }) {

  const [selectedType, setSelectedType] = useState(chosen);
  const handleAddChoice = choice => {
    // if (type.includes('clothes')) {
    //   setselected([choice])
    // } else {
    //   setselectedType([choice, ...selectedType])
    // }
    setSelectedType(choice)
  }
  const handleRemoveChoice = choice => {
    // const updatedChoices = selectedType.filter(c => c !== choice)
    // if (updatedChoices.length === 0 && type === 'clothes') {
    //   setselectedType(['All', ...updatedChoices]);
    // } else {
    //   setselectedType([]);
    // }
    // setselectedType(updatedChoices);
    if(choice === selectedType) // secure
      setSelectedType(null);
  }
  return (
    <div className='add-to-today-popup'>
      <div className='popup-frame'>
        <div className='add-to-today-popup-heading'>
          {type === 'clothes' ? 'Select A Clothes Type' : 'Select Activities'}
        </div>
        <div className='add-to-today-popup-buttons'>
          {eventTypes.filter((choice) => !(choice === 'All')).map((choice, index) => {
            if (selectedType && selectedType.toUpperCase() === choice.toUpperCase()) {
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
          <button className='confirm-btn' onClick={() => handleAddToOutfit(selectedType)}>
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
