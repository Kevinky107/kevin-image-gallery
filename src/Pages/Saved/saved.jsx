import { useEffect, useState } from 'react'
import './saved.css'
import OrderSelect from '../../Components/orderSelect/orderSelect'
import Imgdisplay from '../../Components/ImgDisplay/ImgDisplay'
import { reloadData } from '../../features/saved_images/savedImages'
import { useSelector } from 'react-redux'

function Saved() {

  const [imageList, setImageList] = useState(JSON.parse(localStorage.getItem('saved')) || []);
  const reloadImages = useSelector(reloadData)

  useEffect(() => {
    setImageList(JSON.parse(localStorage.getItem('saved')) || [])
  },[reloadImages])

  return (
    <main>
        {imageList.length == 0 ? 
        <h2 className='notsaved-label'>YOU DIDN'T SAVE ANY IMAGE YET!</h2> : 
        <>
          <OrderSelect/>
          <Imgdisplay images={imageList} />
        </>}
    </main>
  )
}

export default Saved