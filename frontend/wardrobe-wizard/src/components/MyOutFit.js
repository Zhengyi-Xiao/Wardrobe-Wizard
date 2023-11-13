import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import {
  collapse, remove_todays_outfit, refresh_todays_outfit, add_new_cloth, open,
  workout, meeting, party, formal_event, outdoor, causal
} from '../styles/icons.js';
import dayjs from "dayjs";
import '../styles/MyOutFit.css'
import ChooseEventType from './ChooseEventType.js';
import { dbevent2event } from '../api/api.js'
import { addNewActivity, getOutfitByDate, deleteActivity, fetchCloth, removeClothFromOutfit, randomGenerateClothByTypeEvent } from '../api/api.js'

function MyOutFit({ selectedDate }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activity = queryParams.get('activity');

  const selectedDateStr = selectedDate.$y + '' +
    (selectedDate.$M + 1 < 10 ? '0' + selectedDate.$M + 1 : selectedDate.$M + 1) + '' +
    (selectedDate.$D < 10 ? '0' + selectedDate.$D : selectedDate.$D);

  // console.log(selectedDateStr);

  const [todaysOutfit, setTodaysOutfit] = useState([])
  const [isChooseEventTypeOpen, setIsChooseEventTypeOpen] = useState(false);

  useEffect(() => {
    // Fetch the temperature and update the 'temp' state
    getOutfitByDate(selectedDateStr).then(async (response) => {
      if (activity) {
        response.sort((a, b) => {
          if (a.event === activity) return -1; // 'activity' first
          if (b.event === activity) return 1; // 'activity' first
          return 0;
        });
      }
      setTodaysOutfit(response);

    });
  }, [selectedDate, isChooseEventTypeOpen, selectedDateStr])

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
    // event.preventDefault();
    if (selectedTypes) {
      const activity = selectedTypes;
      await addNewActivity(activity, selectedDateStr);
      setIsChooseEventTypeOpen(!isChooseEventTypeOpen);
    }
  }

  const currentDate = dayjs();

  return (
    <div className='my-outfit'>
      <p className='outfit-title'>My Outfit</p>
      {todaysOutfit.map((outfit, index) => {
        return (
          <TodaysOutfit
            key={index}
            mongoID={outfit._id}
            index={index}
            event={outfit.event}
            outfits={outfit.outfits}
            selectedDate={selectedDate} />
        )
      })}
      {selectedDate.$D >= currentDate.$D && selectedDate.$M >= currentDate.$M && selectedDate.$y >= currentDate.$y &&
        <button className='add-activity-button' onClick={handleSelectActivity}>+ Add Activity</button>
      }
      <div className='spacer-outfit'></div>
      {isChooseEventTypeOpen && <ChooseEventType
        handleAddToOutfit={handleChangeActivity}
        handleClosePopUp={handleSelectActivity}
        eventTypes={eventTypes}
        type={'activity'}
        multiple={true} />}
    </div>
  )
}


function TodaysOutfit({ mongoID, index, event, outfits, selectedDate }) {
  const history = useHistory();
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
    await deleteActivity(mongoID);
    setDeleted(true);
  }
  if (deleted) {
    return null;
  }

  const handleJump = (event) => {
    const selectedDateStr = selectedDate.$y + '' +
      (selectedDate.$M + 1 < 10 ? '0' + selectedDate.$M + 1 : selectedDate.$M + 1) + '' +
      (selectedDate.$D < 10 ? '0' + selectedDate.$D : selectedDate.$D);
    const queryParam = `?activity=${event}&selectedDate=${selectedDateStr}`;
    const path = '/closet' + queryParam;
    history.push(path); // Navigate to the new URL
  }

  const event2icon = {
    "outdoor": outdoor,
    "formal": formal_event,
    "meeting": meeting,
    "night-out": party,
    "causal": causal,
    "workout": workout
  }

  const currentDate = dayjs();

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
          <p className='outfit-option-title' onClick={handleFoldContent}>{dbevent2event[event]}</p>
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
              <OutfitOptions key={`${index}-${Date.now()}`}
                mongoID={outfit}
                event={event}
                selectedDate={selectedDate} />
            )
          })}
          {selectedDate.$D >= currentDate.$D && selectedDate.$M >= currentDate.$M && selectedDate.$y >= currentDate.$y &&
            <div className='outfit-option-clothes-item-container' onClick={() => handleJump(event)}>
              <button className='outfit-option-clothes-item-add'>
                {add_new_cloth}
              </button>
            </div>
          }
        </div>}
      </div>
    </div>
  )
}

function OutfitOptions({ mongoID, handleOpenProfile, event, selectedDate }) {
  const [openProfile, setOpenProfile] = useState({});
  const [removed, setRemoved] = useState(false);
  const [mongoIDState, setMongoID] = useState(mongoID);

  useEffect(() => {
    fetchCloth(mongoIDState).then(async (response) => {
      setOpenProfile(response);
    });
  }, [mongoIDState]);

  const handleRemove = async () => {
    const selectedDateStr = selectedDate.$y + '' +
      (selectedDate.$M + 1 < 10 ? '0' + selectedDate.$M + 1 : selectedDate.$M + 1) + '' +
      (selectedDate.$D < 10 ? '0' + selectedDate.$D : selectedDate.$D);
    await removeClothFromOutfit(mongoIDState, event, selectedDateStr);
    setRemoved(true);
  };

  const handleRefresh = async () => {
    const selectedDateStr = selectedDate.$y + '' +
      (selectedDate.$M + 1 < 10 ? '0' + selectedDate.$M + 1 : selectedDate.$M + 1) + '' +
      (selectedDate.$D < 10 ? '0' + selectedDate.$D : selectedDate.$D);
    const newId = await randomGenerateClothByTypeEvent(event, mongoIDState, selectedDateStr);
    setMongoID(newId);
  };

  if (removed) {
    return null;
  }
  const currentDate = dayjs();

  return (
    <div className='outfit-option-clothes-item-container'>
      <div className='outfit-option-clothes-item'>
        {selectedDate.$D >= currentDate.$D && selectedDate.$M >= currentDate.$M && selectedDate.$y >= currentDate.$y &&
          <div className='outfit-option-clothes-item-header'>
            <button className='outfit-option-clothes-item-remove' onClick={handleRemove}>
              {remove_todays_outfit}
            </button>
            <button className='outfit-option-clothes-item-refresh' onClick={handleRefresh}>
              {refresh_todays_outfit}
            </button>
          </div>}
        <div className='outfit-option-clothes-item-image'>
          <img className='cloth-image' key={Date.now()} src={openProfile.image_urls} alt='loading cloth' onClick={handleOpenProfile} />
        </div>
      </div>
    </div>
  );
}

export default MyOutFit