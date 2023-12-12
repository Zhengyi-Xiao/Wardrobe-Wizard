import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { getRecommendClothByTypeEvent } from '../api/api.js'
import AddClothPopUp from './AddClothPopUp.js';
import '../styles/Recommend.css'
import { swicthVersion } from '../styles/icons.js'

function SingleRecommendBlock({ type, eventTypes, clothType }) {
  const recommendSize = 3 // can be changed later
  const [clothTypeUrls, setClothTypeUrls] = useState([])
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const closeAddClothPopUp = () => {
    setOpenProfile(false);
  }

  const handleClick = (e) => {
    setSelectedElement(e)
    setOpenProfile(!openProfile)
  }

  useEffect(() => {
    // Fetch image URLs based on selected choices
    async function fetchClothUrls() {
      const urls = await getRecommendClothByTypeEvent(
        'All',
        type || 'null'
      )
      setClothTypeUrls(urls)
    }
    fetchClothUrls()
  }, [type, refresh])

  if (openProfile) {
    return ReactDOM.createPortal(
      <AddClothPopUp
        selectedImage={selectedElement.image_urls}
        mongoID={selectedElement?._id}
        onClose={closeAddClothPopUp}
        eventTypes={eventTypes}
        clothType={clothType}
        setRefresh={setRefresh}
        forEdit={false} />,
      document.getElementById('root-portal')
    );
  }

  return (
    <div className='single-activity-container'>
      <div className='single-activity-title'>
        {clothTypeUrls.length > 0 && type + ' Essentials'}
      </div>
      <div className='single-activity-clothes-row'>
        {clothTypeUrls
          .filter((imageUrl, index) => (index > clothTypeUrls.length - recommendSize - 1))
          .map((element, index) => {
            return (
              <img className='recommend-cloth-image' key={index} src={element.image_urls} alt='cloth' onClick={() => handleClick(element)} />
            )
          })}
      </div>
    </div>
  );
}

function RecommendPage() {

  const eventTypes = [
    'Workout',
    'Formal Events',
    'Meeting',
    'Outdoor',
    'Night Out',
    'Causal'
  ]

  const clothType = [
    'Top',
    'Bottom',
    'Full Body',
    'Outwear',
    'Shoes',
    'Accessory'
  ]

  return (
    <div className='recommend'>
      <div className='top-row-frame'>
        <div className='recommend-page-title'>Recommend</div>
      </div>
      <div className='all-activity-container'>
        {eventTypes.map((type, index) => {
          return (<SingleRecommendBlock key={index} type={type} eventTypes={eventTypes} clothType={clothType} />)
        })}
      </div>
    </div>
  )
}

export default RecommendPage

// 10434 10925