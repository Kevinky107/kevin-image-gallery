import { useState } from 'react'
import Search from './Search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import './Nav.css'
import { useLocation, useNavigate } from 'react-router-dom';

function Nav() {

  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(location.pathname)

  function changePage() {
    if(page === "/"){
      setPage("/saved")
      navigate("/saved")
    } else {
      setPage("/")
      navigate("/")
    }
  }

  return (
    <nav>
      <img src="resources/Logo.png" alt="Logo" />
      <div className="nav__right">
        <Search/>
        <FontAwesomeIcon id="bttn-ico" icon={page == "/" ? faBookmark : faHouse} onClick={changePage} />
      </div>
    </nav>
  )
}

export default Nav