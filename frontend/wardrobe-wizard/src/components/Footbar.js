import React from 'react'
import { Link } from 'react-router-dom';

import { recommend_page, home_page, closet_page } from '../styles/icons.js'
import '../styles/Footbar.css'

function Footbar() {
  return (
    <nav className='footbar'>
      <div className='button-container'>
        <Link to="/closet">{closet_page}</Link>
        <Link to="/">{home_page}</Link>
        <Link to="/recommend">{recommend_page}</Link>
      </div>
    </nav>
  )
}

export default Footbar