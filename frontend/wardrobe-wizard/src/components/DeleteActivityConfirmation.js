import React from 'react';
import '../styles/DeleteActivityConfirmation.css'

function DeleteActivityConfirmation({ hideElement, onDeleteActivity }) {

  return (
    <div className='delete-confirmation-flame'>
      <div className='delete-confirmation'>
        <div className='delete-confirmation-top'>
          <h1 className='confirmation-message'>Are you sure you want to delete this activity?</h1>
        </div>
        <div className='delete-confirmation-button-flame'>
          <button className='confirmation-button-yes' onClick={onDeleteActivity}>Yes</button>
          <button className='confirmation-button-no' onClick={hideElement}>No</button>
        </div>

      </div>
    </div>
  )
}

export default DeleteActivityConfirmation