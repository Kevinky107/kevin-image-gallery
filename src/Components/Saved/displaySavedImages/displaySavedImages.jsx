import { useEffect, useState } from 'react'
import ImgCard from '../../ImgCard/imgCard'


function SavedGallery() {

    const [imageList, setImageList] = useState(JSON.parse(localStorage.getItem('saved')) || []);

    const renderImages = () => {
        return imageList.map((image, index) => {
          return(<ImgCard source={image.source} alt={image.alt} id={image.id} height={image.height} width={image.width} likes={image.likes} key={index} />)
        })
    }

  return (
    <section className='gallery'>
        {
            imageList.length == 0 ? <h2>U DIDN'T SAVE ANY IMAGE YET!</h2> :
            renderImages()
        }
    </section>
  )
}

export default  SavedGallery