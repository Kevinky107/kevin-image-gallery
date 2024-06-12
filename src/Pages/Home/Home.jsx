import ImgDisplay from '../../Components/ImgDisplay/ImgDisplay'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { imagesDataSelector, imagesErrorSelector, imagesStatusSelector } from '../../features/images/imagesSlice';
import { getImagesThunk } from '../../features/images/imagesThunk';
import { useDispatch } from 'react-redux';

import './Home.css'

function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [imageList, setImageList] = useState([]);

  const dispatch = useDispatch()

  const imagesStatus = useSelector(imagesStatusSelector)
  const imagesData = useSelector(imagesDataSelector)
  const imagesError = useSelector(imagesErrorSelector)

  useEffect(() => {
      if (imagesStatus === "idle") {
          dispatch(getImagesThunk())
      }
      else if (imagesStatus === "pending") {
          setIsLoading(true)
      }
      else if (imagesStatus === "fulfilled") {
          setIsLoading(false)
          const data = []
          imagesData.map((image, index) => {
              data.push({source: image.urls.regular, alt: image.alt_description, id: image.id, height: image.height, width: image.width, likes: image.likes, key: index})
          })
          setImageList(data)
      }
      else if (imagesStatus === "rejected") {
          alert(imagesError)
      }
  },[imagesStatus])

  return (
    <main>
        <div className="header-container">
          <div className="header-text">
            <h1>KEVIN’S IMAGE GALLERY</h1>
            <h2>Gallery of free images provided by Unsplash, with the possibility of downloading and saving, developed with React and Redux</h2>
          </div>
        </div>
        {isLoading ? <h2 className='loading-label' >LOADING...</h2> : <ImgDisplay images={imageList} />}
    </main>
  )
}

export default Home