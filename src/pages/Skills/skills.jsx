import React from 'react'
import './skills.css'
import { FaReact } from "react-icons/fa";
import Header from '../../components/Header/header';
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import Copyright from '../../components/Copyright/copyright';

function Skill() {
  return (
    <div className='Skill-Cards'>
      <Header />
      <div className='Skills-Icons'>
        <div className='IconFileOne'>
          <div className='Icon-One'>
            <label className='Icon'><FaReact /></label>
            <h3 className='Skill-Titel'>React</h3>
            <label>Learning to create interactive user </label>
            <label>interfaces for websites using React, a</label>
            <label>popular JavaScript library.</label>
          </div>
          <div className='Icon-One'>
            <label className='Icon'><FaHtml5 /></label>
            <h3 className='Skill-Titel'>HTML & CSS</h3>
            <label>Learning the basics of creating website </label>
            <label>structure and styling using HTML and</label>
            <label>CSS.</label>
          </div>
          <div className='Icon-One'>
            <label className='Icon'><FaPython /></label>
            <h3 className='Skill-Titel'>Python</h3>
            <label>Learning the Python programming </label>
            <label>language for various purposes, such as</label>
            <label>data processing and creating simple</label>
            <label>programs.</label>
          </div>
          <div className='Icon-One'>
            <label className='Icon'><SiTailwindcss /></label>
            <h3 className='Skill-Titel'>Tailwind CSS</h3>
            <label>Using Tailwind CSS to create website </label>
            <label>styles more quickly and easily.</label>
          </div>
          <div className='Icon-One'>
            <label className='Icon'><FaDatabase /></label>
            <h3 className='Skill-Titel'>MySQL</h3>
            <label>Learning to manage data in a database </label>
            <label>using MySQL for website purposes.</label>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  )
}

export default Skill