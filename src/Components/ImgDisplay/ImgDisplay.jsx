import ImgCard from '../ImgCard/imgCard';

import './imgDisplay.css'


function Imgdisplay({images = []}) {

  return (
    <section className='gallery'>
        {
            images.map((image, index) => (
                <ImgCard source={image.source} alt={image.alt} id={image.id} height={image.height} width={image.width} likes={image.likes} key={image.id} />
            ))
        }
    </section>
  )
}

export default  Imgdisplay