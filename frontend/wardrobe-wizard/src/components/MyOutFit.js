import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
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
import DeleteActivityConfirmation from './DeleteActivityConfirmation.js';

function MyOutFit({ selectedDate }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activity = queryParams.get('activity');

  const selectedDateStr = selectedDate.$y + '' +
    (selectedDate.$M + 1 < 10 ? '0' + selectedDate.$M + 1 : selectedDate.$M + 1) + '' +
    (selectedDate.$D < 10 ? '0' + selectedDate.$D : selectedDate.$D);

  const [todaysOutfit, setTodaysOutfit] = useState([])
  const [isChooseEventTypeOpen, setIsChooseEventTypeOpen] = useState(false);

  const currentDate = dayjs();
  const [showDelete, setShowDelete] = useState(false);
  const handleSetShowDelete = () => {
    setShowDelete(!showDelete);
  }
  const [refresh, setRefresh] = useState(false);

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
  }, [showDelete, selectedDate, isChooseEventTypeOpen, selectedDateStr, activity, refresh])

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
    if (selectedTypes) {
      const activity = selectedTypes;
      await addNewActivity(activity, selectedDateStr);
      setIsChooseEventTypeOpen(!isChooseEventTypeOpen);
    }
  }



  return (
    <div className='my-outfit'>
      <div className='spacer-outfit'>
        <p className='outfit-title'>My Outfit</p>
        {todaysOutfit.length > 0 && selectedDate.$D >= currentDate.$D && selectedDate.$M >= currentDate.$M && selectedDate.$y >= currentDate.$y &&
          <button className={showDelete ? 'unclicked-edit' : 'clicked-edit'} onClick={handleSetShowDelete}>
            Edit
          </button>
        }
      </div>
      {todaysOutfit.map((outfit, index) => {
        return (
          <TodaysOutfit
            key={index}
            mongoID={outfit._id}
            index={index}
            event={outfit.event}
            outfits={outfit.outfits}
            selectedDate={selectedDate}
            showDelete={showDelete}
            refresh={refresh}
            setRefresh={setRefresh}
            setShowDelete={setShowDelete} />
        )
      })}
      {!showDelete && selectedDate.$D >= currentDate.$D && selectedDate.$M >= currentDate.$M && selectedDate.$y >= currentDate.$y &&
        <button className='add-activity-button' onClick={handleSelectActivity}>+ Add Activity</button>
      }
      <div className='spacer-outfit'></div>
      {isChooseEventTypeOpen &&
        <ChooseEventType
          handleAddToOutfit={handleChangeActivity}
          handleClosePopUp={handleSelectActivity}
          eventTypes={eventTypes}
          existingTypes={todaysOutfit.map((outfit) => outfit.event)}
          type={'activity'}
          multiple={false} />}
    </div>
  )
}


function TodaysOutfit({ mongoID, index, event, outfits, selectedDate, showDelete, setShowDelete, refresh, setRefresh }) {
  const history = useHistory();
  const [foldContent, setFoldContent] = useState(index === 0);

  const handleFoldContent = () => {
    setFoldContent(!foldContent);
  }

  const [deleted, setDeleted] = useState(false)

  const elementRef = useRef(document.createElement("div"));

  const showElement = React.useCallback(() => {
    document.querySelector("body").appendChild(elementRef.current);
  }, []);

  const hideElement = React.useCallback(() => {
    try {
      document.querySelector('body').removeChild(elementRef.current);
    } catch (error) {
      console.log('hideElement', error);
    }
  }, []);

  const onDeleteActivity = async () => {
    try {
      await deleteActivity(mongoID);
      document.querySelector('body').removeChild(elementRef.current);
      setDeleted(true);
      setShowDelete(false)
    } catch (error) {
      console.log('onDeleteActivity', error);
    }
  }

  // if (deleted) {
  //   return null;
  // }

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
      {ReactDOM.createPortal(
        <DeleteActivityConfirmation hideElement={hideElement} onDeleteActivity={onDeleteActivity} />,
        elementRef.current
      )}
      {showDelete &&
        <button className='outfit-option-clothes-item-delete'
          onClick={showElement} >
          {remove_todays_outfit}
        </button>}
      <div className={`outfit-option ${showDelete ? 'shake' : ''}`}>
        <div className={`outfit-option-header ${!foldContent ? 'folded' : ''}`} onClick={handleFoldContent}>
          <div className='outfit-option-header-icon'>
            {event2icon[event]}
          </div>
          <p className='outfit-option-title' >{dbevent2event[event]}</p>
          <div className='outfit-option-header-open' >
            {foldContent ? collapse : open}
          </div>
        </div>
        {foldContent && <div className='outfit-option-clothes'>
          <div className='spacer'></div>
          {outfits.map((outfit, index) => {
            return (
              <OutfitOptions key={`${index}-${Date.now()}`}
                mongoID={outfit}
                event={event}
                refresh={refresh}
                setRefresh={setRefresh}
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

function OutfitOptions({ mongoID, handleOpenProfile, event, selectedDate, refresh, setRefresh }) {
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
    setRefresh(!refresh);
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
          <img className='cloth-image' key={Date.now()} src={openProfile?.image_urls} alt='' onClick={handleOpenProfile} />
        </div>
      </div>
    </div>
  );
}

export default MyOutFit