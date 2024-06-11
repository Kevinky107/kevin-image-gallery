import { useState } from 'react'

import './Header.css'

function Header() {

  return (
    <div className="header-container">
      <div className="header-text">
        <h1>KEVIN’S IMAGE GALLERY</h1>
        <h2>Gallery of free images provided by Unsplash, with the possibility of downloading and saving, developed with React and Redux</h2>
      </div>
    </div>
  )
}

export default Header