import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { getClothByTypeEvent } from '../api/api.js'
import AddClothPopUp from './AddClothPopUp.js';
import '../styles/Recommend.css'

function SingleRecommendBlock({ type, eventTypes, clothType }) {
  const recommendSize = 3 // can be changed later
  const [clothTypeUrls, setClothTypeUrls] = useState([])
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

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
      const urls = await getClothByTypeEvent(
        'All',
        type || 'null'
      )
      setClothTypeUrls(urls)
    }
    fetchClothUrls()
  }, [type])

  if (openProfile) {
    return ReactDOM.createPortal(
      <AddClothPopUp selectedImage={selectedElement.image_urls} onClose={closeAddClothPopUp} eventTypes={eventTypes} clothType={clothType} forEdit={false} />,
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
              <img className='recommend-cloth-image' src={element.image_urls} alt='cloth' onClick={() => handleClick(element)} />
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
        {eventTypes.map(type => {
          return (<SingleRecommendBlock key={type} type={type} eventTypes={eventTypes} clothType={clothType} />)
        })}
      </div>
    </div>
  )
}

export default RecommendPage