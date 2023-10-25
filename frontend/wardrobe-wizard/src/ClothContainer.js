import React from 'react'
import { add_to_todays_outfit } from './icons.js'

function ClothContainer ({ imageUrl }) {
  return (
    <div className='cloth-container'>
      <img className='cloth-image' src={imageUrl} alt='cloth' />
      <div className='cloth-to-outfit'>{add_to_todays_outfit}</div>
    </div>
  )
}

export default ClothContainer
