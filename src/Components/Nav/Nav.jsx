import { useState } from 'react'
import Search from './Search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import './Nav.css'

function Nav() {

  return (
    <nav>
      <img src="resources/Logo.png" alt="Logo" />
      <div className="nav__right">
        <Search/>
        <FontAwesomeIcon id="bttn-ico" icon={faBookmark} />
      </div>
    </nav>
  )
}

export default Nav