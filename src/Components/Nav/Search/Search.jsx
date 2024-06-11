import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import './Search.css'
import { getSearchedImagesThunk } from '../../../features/images/imagesThunk'

function Search() {

  const dispatch = useDispatch()
  const [query, setQuery] = useState("");

  function clickSearchHandler(event){
    event.preventDefault();
    dispatch(getSearchedImagesThunk(query))
  }

  function typeHandler(event){
    setQuery(event.target.value)
  }

  return (
    <form onSubmit={clickSearchHandler} className="searchbar">
      <input type="text" id="search" onChange={typeHandler} />
      <FontAwesomeIcon icon={faMagnifyingGlass} onClick={clickSearchHandler} />
    </form>
  )
}

export default Search