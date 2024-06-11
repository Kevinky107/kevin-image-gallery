import { useState } from 'react'
import Header from './Header/Header'
import ImgDisplay from './ImgDisplay/ImgDisplay'

import './Home.css'

function Home() {

  return (
    <main>
        <Header />
        <ImgDisplay />
    </main>
  )
}

export default Home