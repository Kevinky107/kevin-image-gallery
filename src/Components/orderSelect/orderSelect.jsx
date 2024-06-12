import { useState } from 'react'
import './orderSelect.css'

function OrderSelect() {

  return (
    <div className='select-container'>
        <label>SORT BY </label>
        <select name='sort-saved'>
            <option value="dateUp">DATE ↑</option>
            <option value="dateDown" selected>DATE ↓</option>
            <option value="likesUp">LIKES ↑</option>
            <option value="likesDown">LIKES ↓</option>
            <option value="widthUp">WIDTH ↑</option>
            <option value="widthDown">WIDTH ↓</option>
            <option value="heightUp">HEIGHT ↑</option>
            <option value="heightDown">HEIGHT ↓</option>
        </select>
    </div>
  )
}

export default OrderSelect