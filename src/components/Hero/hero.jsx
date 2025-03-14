import React from 'react'
import './hero.css'

function Hero() {
    return (
        <div className='MainContainer'>
            <div className='BlueimgContainer'>
                <div className='Blue-Section'>
                    <h1 className='heading'>Hi, I'm Madhavan.</h1>
                    <p className='sub-title'> Web Developer</p>
                    <p className='paragraph'>
                        I have a deep passion for technology and a constant drive to learn new things.
                    </p>
                    <p className='paragraph'> I enjoy the process of building something from scratch, from conceptualizing an idea to implementing it into a tangible product.</p>
                    <p className='paragraph'>I believe that technology can be used to make the world a better place.</p>
                    <button className='cv-button'>Check out my CV</button>
                </div>
                <div className='profile-Container'>
                    <img src="https://th.bing.com/th/id/OIP.Hxv-5vSdIAfuoR_napcRpAHaEo?rs=1&pid=ImgDetMain" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero