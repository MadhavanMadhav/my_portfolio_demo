import React from 'react'
import './contact.css'
import Header from '../../components/Header/header'
import Copyright from '../../components/Copyright/copyright'

function Contact() {
    return (
        <div className='contact-form-container'>
            <Header />
            <div className='form-container'>
                <div className='contact-form'>
                    <h2 className='title'>Contact Me</h2>
                    <p className='description'>I am ready to assist with your needs. Feel free to reach out to me anytime.</p>
                </div>
            </div>
            <Copyright />
        </div>
    )
}

export default Contact