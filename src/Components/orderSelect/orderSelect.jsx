import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { sortImages } from '../../features/saved_images/savedImages'

import './orderSelect.css'
import { useDispatch } from 'react-redux'

function OrderSelect() {

  const [show, setShow] = useState(false)
  const [selection, setSelection] = useState("dateDown")
  const [text, setText] = useState(<>DATE <FontAwesomeIcon icon={faArrowDown} /></>)
  const dispatch = useDispatch()

  const changeSelected = (event) => {
    const order = event.target.attributes.order.value
    switch(order){
      case "dateUp":
        setSelection("dateUp")
        setText(<>DATE <FontAwesomeIcon icon={faArrowUp} /></>)
        dispatch(sortImages("dateUp"))
        setShow(false)
        break
      case "dateDown":
        setSelection("dateDown")
        setText(<>DATE <FontAwesomeIcon icon={faArrowDown} /></>)
        dispatch(sortImages("dateDown"))
        setShow(false)
        break
      case "likesUp":
        setSelection("likesUp")
        setText(<>LIKES <FontAwesomeIcon icon={faArrowUp} /></>)
        dispatch(sortImages("likesUp"))
        setShow(false)
        break
      case "likesDown":
        setSelection("likesDown")
        setText(<>LIKES <FontAwesomeIcon icon={faArrowDown} /></>)
        dispatch(sortImages("likesDown"))
        setShow(false)
        break
      case "widthUp":
        setSelection("widthUp")
        setText(<>WIDTH <FontAwesomeIcon icon={faArrowUp} /></>)
        dispatch(sortImages("widthUp"))
        setShow(false)
        break
      case "widthDown":
        setSelection("widthDown")
        setText(<>WIDTH <FontAwesomeIcon icon={faArrowDown} /></>)
        dispatch(sortImages("widthDown"))
        setShow(false)
        break;
      case "heightUp":
        setSelection("heightUp")
        setText(<>HEIGHT <FontAwesomeIcon icon={faArrowUp} /></>)
        dispatch(sortImages("heightUp"))
        setShow(false)
        break
      case "heightDown":
        setSelection("heightDown")
        setText(<>HEIGHT <FontAwesomeIcon icon={faArrowDown} /></>)
        dispatch(sortImages("heightDown"))
        setShow(false)
        break
    }
  }

  return (
    <div className='select-container'>
        <label>SORT BY </label>
        <div className='select'>
          <button className='select-default' onClick={() => {setShow(!show)}}><label className="button-label">{text}</label></button>
          { show &&
            <ul className='options'>
              <li onClick={changeSelected} order="dateUp" className='option'>DATE <FontAwesomeIcon icon={faArrowUp}/></li>
              <li onClick={changeSelected} order="dateDown" className='option' selected>DATE <FontAwesomeIcon icon={faArrowDown} /></li>
              <li onClick={changeSelected} order="likesUp" className='option'>LIKES <FontAwesomeIcon icon={faArrowUp} /></li>
              <li onClick={changeSelected} order="likesDown" className='option'>LIKES <FontAwesomeIcon icon={faArrowDown} /></li>
              <li onClick={changeSelected} order="widthUp" className='option'>WIDTH <FontAwesomeIcon icon={faArrowUp} /></li>
              <li onClick={changeSelected} order="widthDown" className='option'>WIDTH <FontAwesomeIcon icon={faArrowDown} /></li>
              <li onClick={changeSelected} order="heightUp" className='option'>HEIGHT <FontAwesomeIcon icon={faArrowUp} /></li>
              <li onClick={changeSelected} order="heightDown" className='option'>HEIGHT <FontAwesomeIcon icon={faArrowDown} /></li>
            </ul>
          }
          </div>
    </div>
  )
}

export default OrderSelect