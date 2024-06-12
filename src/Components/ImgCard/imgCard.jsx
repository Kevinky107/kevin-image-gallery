import { useState } from 'react'
import { saveAs } from "file-saver"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as faBookmarkSaved } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import './imgCard.css'
import { saveImage, removeImage } from '../../features/saved_images/savedImages'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Modal from './ImagePopUp/modal'

function ImgCard({source, alt, id, height, width, likes}) {

    function clickDownloadHandler(){
      saveAs(source, `${alt}.jpg`);
    }

    const location = useLocation()
    const dispatch = useDispatch()
    const localdata = JSON.parse(localStorage.getItem('saved')) || []
    
    function isSaved() {
      let finded = false;
      localdata.forEach(image => {
        if(image.id === id)
          finded = true;
      });
      return finded
    }

    const [save, setSave] = useState(isSaved)
    const [modalActive, setModalActive] = useState(false)
    let now = Date.now()

    function saveActualImage() {
      if(!save) {
        now = Date.now()
        dispatch(saveImage({source: source, alt: alt, id: id, height: height, width: width, likes: likes, date: now}))
        setSave(true)
      } else {
        dispatch(removeImage(id))
        setSave(false)
      }
    }

    const closeModal = () => {
      setModalActive(false)
    }

  return (
    <div className='imgContainer'>
      { modalActive &&
        <div>
          <Modal close={closeModal} source={source} alt={alt} id={id} height={height} width={width} likes={likes} date={now} />
        </div>
      }
      <img src={source} alt={alt} id={id} likes={likes} width={width} height={height} />
      <div className='overImg' onClick={() => {
        if(location.pathname === "/saved")
          setModalActive(true)
      }}>
          <FontAwesomeIcon className="svgDownload" icon={faDownload} onClick={clickDownloadHandler} />
          <FontAwesomeIcon className="svgSave" icon={!save ? faBookmark : faBookmarkSaved} onClick={saveActualImage} />
      </div>
    </div>
  )
}

export default ImgCard 