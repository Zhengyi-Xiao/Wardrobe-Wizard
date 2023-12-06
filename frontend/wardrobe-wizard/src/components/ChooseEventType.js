import React, { useState } from 'react';
import '../styles/ChooseEventType.css';
import { dbobj2obj, obj2dbobj } from '../api/api.js';

function ChooseEventType({ handleAddToOutfit, handleClosePopUp, eventTypes, type, chosen, multiple, existingTypes }) {
  const [selectedType, setSelectedType] = useState(chosen ? [chosen] : []);

  const handleAddChoice = choice => {
    if (multiple) {
      setSelectedType([choice, ...selectedType])
    } else {
      setSelectedType([choice])
    }
    // setSelectedType(choice)
  }

  const handleRemoveChoice = choice => {
    if (multiple) {
      const updatedChoices = selectedType.filter(c => c !== choice)
      setSelectedType(updatedChoices);
    } else {
      setSelectedType([]);
    }
  }
  console.log("selected Type", existingTypes)

  return (
    <div className='add-to-today-popup'>
      <div className='popup-frame'>
        <div className='add-to-today-popup-heading'>
          {type === 'clothes' ? 'Select A Clothes Type' : 'Select Activities'}
        </div>
        <div className='add-to-today-popup-buttons'>
          {eventTypes.filter((choice) => !(choice === 'All')).map((choice, index) => {
            if (existingTypes && existingTypes.includes(obj2dbobj[choice])) {
              return (
                <></>
              )
            }
            if (selectedType && selectedType.includes(choice)) {
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
          <button className='confirm-btn' onClick={(event) => handleAddToOutfit(event, selectedType)}>
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
