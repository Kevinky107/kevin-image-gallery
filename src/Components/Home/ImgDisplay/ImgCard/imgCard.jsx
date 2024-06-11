import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBookmark } from '@fortawesome/free-solid-svg-icons'; QUE HAGO CON ESTOO
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import './imgCard.css'

function ImgCard({source, alt, id, height, width, likes}) {

    function clickDownloadHandler(){
        
    }

  return (
    <div className='imgContainer'>
        <img src={source} alt={alt} id={id} likes={likes} width={width} height={height} />
        <div className='overImg'>
            <FontAwesomeIcon className="svgDownload" icon={faDownload} href={source} download={alt} />
            <FontAwesomeIcon className="svgSave" icon={faBookmark} />
        </div>
    </div>
  )
}

export default ImgCard 