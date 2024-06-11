import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './Search.css'

function Search() {

  return (
    <div className="searchbar">
      <input type="text" id="search" />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  )
}

export default Search