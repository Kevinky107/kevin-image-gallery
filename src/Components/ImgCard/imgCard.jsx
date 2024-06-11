import { useState } from 'react'
import { saveAs } from "file-saver"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as faBookmarkSaved } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import './imgCard.css'
import { saveImage, removeImage } from '../../features/saved_images/savedImages'
import { useDispatch } from 'react-redux'

function ImgCard({source, alt, id, height, width, likes} ) {

    function clickDownloadHandler(){
      saveAs(source, `${alt}.jpg`);
    }

    const dispatch = useDispatch()
    
    function isSaved() {
      let finded = false;
      JSON.parse(localStorage.getItem('saved')).forEach(image => {
        if(image.id === id)
          finded = true;
      });
      return finded
    }

    const [save, setSave] = useState(isSaved)

    function saveActualImage() {
      if(!save) {
        dispatch(saveImage({source: source, alt: alt, id: id, height: height, width: width, likes: likes, date: Date.now()}))
        setSave(true)
      } else {
        dispatch(removeImage(id))
        setSave(false)
      }
    }

  return (
    <div className='imgContainer'>
        <img src={source} alt={alt} id={id} likes={likes} width={width} height={height} />
        <div className='overImg'>
            <FontAwesomeIcon className="svgDownload" icon={faDownload} onClick={clickDownloadHandler} />
            <FontAwesomeIcon className="svgSave" icon={!save ? faBookmark : faBookmarkSaved} onClick={saveActualImage} />
        </div>
    </div>
  )
}

export default ImgCard 