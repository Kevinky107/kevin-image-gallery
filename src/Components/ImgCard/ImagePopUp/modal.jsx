import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDown, faArrowsLeftRight, faHeart, faCalendar, faXmark } from '@fortawesome/free-solid-svg-icons'
import { changeDescription } from '../../../features/saved_images/savedImages'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

function Modal({close, source, alt, id, height, width, likes, date}) {

    const num = new Date(date)
    const now = num.toDateString()
    const [description, setDescription] = useState(alt)
    const dispatch = useDispatch()

    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value)
    }

    const saveDescription = () => {
        dispatch(changeDescription({id: id, alt: description}))
    }

  return (
    <>
    <div className="background" onClick={() => {close()}}></div>
    <div className='modalCard'>
        <div className='contenedor'>
            <FontAwesomeIcon icon={faXmark} className='close-modal' onClick={() => {close()}} />
            <div className='image-data'>
                <h3>IMAGE DATA</h3>
                <ul className='modalUl'>
                    <li className='modalLi'><FontAwesomeIcon icon={faArrowsLeftRight} className='svg-data'/>WIDTH: {width}px</li>
                    <li className='modalLi'><FontAwesomeIcon icon={faArrowsUpDown} className='svg-data'/>HEIGHT: {height}px</li>
                    <li className='modalLi'><FontAwesomeIcon icon={faHeart} className='svg-data'/>LIKES: {likes}</li>
                    <li className='modalLi'><FontAwesomeIcon icon={faCalendar} className='svg-data'/>DATE: {now}</li>
                </ul>
            </div>
            <div className='description'>
                <h3>NEW DESCRIPTION</h3>
                <textarea className='input-description' type="text" defaultValue={alt} onChange={changeDescriptionHandler} />
                <button className="buttonPopUp" onClick={saveDescription}>SAVE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal