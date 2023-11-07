import React from 'react'
import { Link } from 'react-router-dom';

import { recommend_page, home_page, closet_page } from '../styles/icons.js'
import '../styles/Footbar.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min.js';

function Footbar() {
  const location = useLocation();
  return (
    <nav className='footbar'>
      <div className='button-container'>
        <Link to="/closet">
          {location.pathname === '/closet' && 
            <div className='selected-bar'></div>
          }
          <div className='icon'>{closet_page}</div>
        </Link>
        <Link to="/">{location.pathname === '/' && 
            <div className='selected-bar'></div>
          }
          <div className='icon'>{home_page}</div></Link>
        <Link to="/recommend">
        {location.pathname === '/recommend' && 
            <div className='selected-bar'></div>
          }
          <div className='icon'>{recommend_page}</div></Link>
      </div>
    </nav>
  )
}

export default Footbar