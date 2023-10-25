import React, { useState } from 'react'
import './ChoiceInputBar.css'
import { delete_selected, add_to_todays_outfit } from './icons.js'

function ChoiceInputBar () {
  const [selectedChoices, setSelectedChoices] = useState(['All'])
  const [displayEventButtons, setDisplayEventButtons] = useState(false)
  const clothType = ['All', 'Top', 'Bottom', 'Outwear']

  const handleChoiceClick = choice => {
    // Check if the selected choice is a clothing type
    if (clothType.includes(choice)) {
      // Replace the selected clothing type with the new choice
      const updatedChoices = selectedChoices.map(currentChoice =>
        clothType.includes(currentChoice) ? choice : currentChoice
      )
      setSelectedChoices(updatedChoices)
      setDisplayEventButtons(true)
    } else {
      // Check if there's an event type already selected
      const eventTypeIndex = selectedChoices.findIndex(currentChoice =>
        eventTypes.includes(currentChoice)
      )

      if (eventTypeIndex !== -1) {
        // Replace the existing event type with the new choice
        const updatedChoices = [...selectedChoices]
        updatedChoices.splice(eventTypeIndex, 1, choice)
        setSelectedChoices(updatedChoices)
      } else {
        // Add the new choice (event type) to selectedChoices
        setSelectedChoices([...selectedChoices, choice])
      }
    }
  }
  const handleRemoveChoice = choice => {
    if (choice === 'All') {
      return
    }
    const updatedChoices = selectedChoices.filter(c => c !== choice)
    // if selectedChoices is empty, add 'All' back
    if (selectedChoices.length === 0) {
      setSelectedChoices(['All'])
    }
    if (clothType.includes(choice)) {
      setDisplayEventButtons(false)
      setSelectedChoices(['All', ...updatedChoices])
    } else {
      setSelectedChoices(updatedChoices)
    }
  }
  const showEventButtons = () => {
    setDisplayEventButtons(true)
  }
  const showTypeButtons = () => {
    setDisplayEventButtons(false)
  }

  const eventTypes = [
    'Workout',
    'Meeting',
    'Party',
    'Dinner',
    'Swimming',
    'Interview'
  ]

  return (
    <div className='closet'>
      <div className='top-row-frame'>
        <div className='my-closet-title'>My Closet</div>
        <button className='add-button'>+ Add Clothes</button>
      </div>
      <div className='search-bar-frame'>
        <div className='input-bar'>
          <div className='input-bar-selection-part'>
            {selectedChoices.map(choice => (
              <button
                key={choice}
                className='selected-choice-button'
                onClick={() => handleRemoveChoice(choice)}
              >
                {choice}
                {delete_selected}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className='type-event'>
        <button
          className={`type-event-button ${
            displayEventButtons ? 'fw-400' : 'fw-600'
          }`}
          onClick={showTypeButtons}
        >
          Type
        </button>
        <div className='type-event-button'> | </div>
        <button
          className={`type-event-button ${
            displayEventButtons ? 'fw-600' : 'fw-400'
          }`}
          onClick={showEventButtons}
        >
          Activity
        </button>
      </div>
      <div className='selection-fields-container'>
        {displayEventButtons && (
          <div className='selection-fields'>
            {eventTypes.map(eventType => (
              <button
                key={eventType}
                className={`choice-button ${
                  selectedChoices.includes(eventType) ? 'selected' : ''
                }`}
                onClick={() => handleChoiceClick(eventType)}
              >
                {eventType}
              </button>
            ))}
          </div>
        )}
        {!displayEventButtons && (
          <div className='selection-fields'>
            {clothType.map(choice => (
              <button
                key={choice}
                className={`choice-button ${
                  selectedChoices.includes(choice) ? 'selected' : ''
                }`}
                onClick={() => handleChoiceClick(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className='all-clothes-container'>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/19/84/83/92/19848392_44454539_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/20/94/82/23/20948223_50926557_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/21/52/04/22/21520422_51450615_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/19/71/26/46/19712646_44056374_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/18/39/35/98/18393598_39585223_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/19/73/73/18/19737318_44132456_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/19/73/72/95/19737295_44134463_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/19/44/53/51/19445351_43272409_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
        <div className='cloth-container'>
          <img
            className='cloth-image'
            src='https://cdn-images.farfetch-contents.com/18/09/96/60/18099660_40080669_480.jpg'
            alt='cloth'
          ></img>
          <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
        </div>
      </div>
    </div>
  )
}

export default ChoiceInputBar
