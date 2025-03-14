import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'

function App() {
  return (
    <div className='Container'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App