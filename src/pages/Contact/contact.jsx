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
                    <div className='NameContainer'>
                        <div className='form-row'>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className='form-row'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className='form-column'>
                        <label htmlFor="Your Mail">Your Mail</label>
                        <input className='box' type="text" placeholder="Your Mail" />
                    </div>
                    <div className='form-column'>
                        <label htmlFor="Phone Number">Phone Number</label>
                        <input className='box' type="text" placeholder="+91" />
                    </div>
                    <div className='form-column'>
                        <label htmlFor="Your-Message">Your Message</label>
                        <textarea className='message-box' type="text" placeholder="Write your message here..." />
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
    )
}

export default Contact