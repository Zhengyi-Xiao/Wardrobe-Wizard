import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {
  collapse, remove_todays_outfit, refresh_todays_outfit, add_new_cloth, open,
  workout, meeting, party, formal_event, outdoor, causal
} from '../styles/icons.js';
import ReactDOM from 'react-dom';
import '../styles/MyOutFit.css'
import ChooseEventType from './ChooseEventType.js';

import { addNewActivity, getOutfitByDate, deleteActivity, fetchCloth, removeClothFromOutfit, randomGenerateClothByTypeEvent } from '../api/api.js'

function MyOutFit({ selectedDate }) {
  const selectedDateStr = selectedDate.$y + '' +
    (selectedDate.$M + 1 < 10 ? '0' + selectedDate.$M + 1 : selectedDate.$M + 1) + '' +
    (selectedDate.$D < 10 ? '0' + selectedDate.$D : selectedDate.$D);

  const [todaysOutfit, setTodaysOutfit] = useState([])
  const [isChooseEventTypeOpen, setIsChooseEventTypeOpen] = useState(false);

  useEffect(() => {
    // Fetch the temperature and update the 'temp' state
    getOutfitByDate(selectedDateStr).then(async (response) => {
      setTodaysOutfit(response)
    });
  }, [selectedDate, isChooseEventTypeOpen])

  console.log(
    "current selected date",
    selectedDate.$y +
    "" +
    (selectedDate.$M + 1 < 10
      ? "0" + (selectedDate.$M + 1)
      : selectedDate.$M + 1) +
    "" +
    (selectedDate.$D < 10
      ? "0" + (selectedDate.$D)
      : selectedDate.$D)
  );

  const eventTypes = [
    'Workout',
    'Formal Events',
    'Meeting',
    'Outdoor',
    'Night Out',
    'Causal'
  ]

  const handleSelectActivity = (e) => {
    e.preventDefault();
    setIsChooseEventTypeOpen(!isChooseEventTypeOpen);
  }

  const handleChangeActivity = async (event, selectedTypes) => {
    event.preventDefault();
    if (selectedTypes) {
      const activity = selectedTypes[0];
      await addNewActivity(activity);
      setIsChooseEventTypeOpen(!isChooseEventTypeOpen);
    }
  }

  return (
    <div className='my-outfit'>
      <p className='outfit-title'>My Outfit</p>
      {todaysOutfit.map((outfit, index) => {
        return (
          <TodaysOutfit key={index} mongoID={outfit._id} index={index} event={outfit.event} outfits={outfit.outfits} />
        )
      })}
      <button className='add-activity-button' onClick={handleSelectActivity}>+ Add Activity</button>
      <div className='spacer-outfit'></div>
      {isChooseEventTypeOpen && <ChooseEventType
        handleAddToOutfit={handleChangeActivity}
        handleClosePopUp={handleSelectActivity}
        eventTypes={eventTypes}
        type={'activity'} 
        multiple={true}/>}
    </div>
  )
}


function TodaysOutfit({ mongoID, index, event, outfits }) {
  const history = useHistory();

  function capitalizeFirstLetterOfEachWord(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }

  const [foldContent, setFoldContent] = useState(index === 0);

  const handleFoldContent = () => {
    setFoldContent(!foldContent);
  }

  const [swiped, setSwiped] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      setSwiped(true)
    }
    if (isRightSwipe) {
      setSwiped(false)
    }
  }

  const [deleted, setDeleted] = useState(false)
  const onDeleteActivity = async () => {
    const output = await deleteActivity(mongoID);
    setDeleted(true);
  }
  if (deleted) {
    return null;
  }

  const handleJump = (event) => {
    const queryParam = `?activity=${event}`;
    const path = '/closet' + queryParam;
    history.push(path); // Navigate to the new URL
  }

  const event2icon = {
    "outdoor": outdoor,
    "formal events": formal_event,
    "meeting": meeting,
    "night out": party,
    "causal": causal,
    "workout": workout
  }

  return (
    <div className='todays-outfit-container'>
      <div className='outfit-option'>
        <div className={`outfit-option-header ${!foldContent ? 'folded' : ''}`}
          draggable="true"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className='outfit-option-header-icon'>
            {event2icon[event]}
          </div>
          <p className='outfit-option-title' onClick={handleFoldContent}>{capitalizeFirstLetterOfEachWord(event)}</p>
          <div className='outfit-option-header-open' onClick={handleFoldContent} >
            {foldContent ? collapse : open}
          </div>
          {swiped && <p className='outfit-option-delete' onClick={onDeleteActivity}>
            Delete
          </p>}
        </div>
        {foldContent && <div className='outfit-option-clothes'>
          <div className='spacer'></div>
          {outfits.map((outfit, index) => {
            return (
              <OutfitOptions key={index}
                mongoID={outfit}
                event={event} />
            )
          })}
          <div className='outfit-option-clothes-item-container' onClick={() => handleJump(event)}>
            <button className='outfit-option-clothes-item-add'>
              {add_new_cloth}
            </button>
          </div>
        </div>}
      </div>
    </div>
  )
}

function OutfitOptions({ mongoID, handleOpenProfile, event }) {
  const [openProfile, setOpenProfile] = useState({});
  const [removed, setRemoved] = useState(false);
  const [refreshed, setRefreshed] = useState(false);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    // Fetch the cloth data when the component mounts or refreshed state changes
    fetchCloth(mongoID).then(async (response) => {
      setOpenProfile(response);
    });
  }, [mongoID, refreshed]);

  const handleRemove = async () => {
    await removeClothFromOutfit(mongoID, event);
    setRemoved(true);
  };

  const handleRefresh = async () => {
    await randomGenerateClothByTypeEvent(event, mongoID);
    // Update the refreshed state to trigger a re-render
    setRefreshed((prevRefreshed) => !prevRefreshed);
    window.location.reload(true)
  };

  if (removed) {
    return null;
  }

  return (
    <div className='outfit-option-clothes-item-container'>
      <div className='outfit-option-clothes-item'>
        <div className='outfit-option-clothes-item-header'>
          <button className='outfit-option-clothes-item-remove' onClick={handleRemove}>
            {remove_todays_outfit}
          </button>
          <button className='outfit-option-clothes-item-refresh' onClick={handleRefresh}>
            {refresh_todays_outfit}
          </button>
        </div>
        <div className='outfit-option-clothes-item-image'>
          <img className='cloth-image' src={openProfile?.image_urls} alt='cloth' onClick={handleOpenProfile} />
        </div>
      </div>
    </div>
  );
}

export default MyOutFit