import { useState } from 'react'
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home' 
import Saved from './Components/Saved/saved';

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/saved" element={ <Saved /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
