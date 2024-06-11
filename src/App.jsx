import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home' 

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
