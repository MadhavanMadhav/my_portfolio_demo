import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Header() {
    return (
        <header className='TopContainer'>
            <div className='Log'>
                <p>MADHAVAN</p>
            </div>
            <div className='main-nav'>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-link">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/experiences" className="nav-link">Experiences</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="social-links">
                <a href="#" className='social-link'>
                    <FaGithub />
                </a>
                <a href="#" className='social-link'>
                    <FaLinkedin />
                </a>
                <a href="#" className='social-link'>
                    <FiInstagram />
                </a>
            </div>
        </header>
    )
}

export default Header