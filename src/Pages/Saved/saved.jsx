import { useEffect, useState } from 'react'
import './saved.css'
import OrderSelect from '../../Components/orderSelect/orderSelect'
import Imgdisplay from '../../Components/ImgDisplay/ImgDisplay'
import { reloadData, savedImagesData } from '../../features/saved_images/savedImages'
import { useSelector } from 'react-redux'

function Saved() {
  const reloadImages = useSelector(reloadData)
  const images = useSelector(savedImagesData)

  const [imageList, setImageList] = useState(images);
  
  useEffect(() => {
    setImageList(images)
  },[reloadImages])

  return (
    <main>
        {
          !imageList.length ? 
          <h2 className='notsaved-label'>YOU DIDN'T SAVE ANY IMAGE YET!</h2> : 
          <>
            <OrderSelect/>
            <Imgdisplay images={imageList} />
          </>
        }
    </main>
  )
}

export default Saved