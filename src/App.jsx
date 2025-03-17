import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Skill from './pages/Skills/skills'
import Project from './pages/Project/project'
import Experiences from './pages/Experiences/experiences'
import Contact from './pages/Contact/contact'

function App() {
  return (
    <div className='Container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skill />} />
        <Route path='/project' element={<Project />} />
        <Route path='/experience' element={<Experiences />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App