import React from 'react'
import './home.css'
import Header from '../../components/Header/header'
import Hero from '../../components/Hero/hero'

function Home() {
    return (
        <div className='mainContainer'>
            <Header />
            <Hero />
        </div>
    )
}

export default Home