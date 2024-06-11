import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { imagesDataSelector, imagesErrorSelector, imagesStatusSelector } from '../../../features/images/imagesSlice';
import { getImagesThunk } from '../../../features/images/imagesThunk';
import { useDispatch } from 'react-redux';
import ImgCard from '../../ImgCard/imgCard';

import './imgDisplay.css'


function Imgdisplay() {

    const [isLoading, setIsLoading] = useState(false)
    const [imageList, setImageList] = useState([]);

    const dispatch = useDispatch()

    const imagesStatus = useSelector(imagesStatusSelector)
    const imagesData = useSelector(imagesDataSelector)
    const imagesError = useSelector(imagesErrorSelector)

    const renderImages = () => {
        return imageList.map((image, index) => {
          return(<ImgCard source={image.source} alt={image.alt} id={image.id} height={image.height} width={image.width} likes={image.likes} key={index} />)
        })
    }

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
    <section className='gallery'>
        {
            isLoading ? <h2>Loading...</h2> :
            renderImages()
        }
    </section>
  )
}

export default  Imgdisplay