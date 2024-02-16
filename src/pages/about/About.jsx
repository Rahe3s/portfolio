import React from 'react'
import cv from '../../assets/rahees.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './About.css'
import SkillProgress from '../../components/ProgressBar/SkillProgress'
function About() {
  return (
    <section className='about'>
      <div className='header'>
      <h1>About <span>Me</span></h1>
      </div>
      <div className='content'>
        <div className="about-intro">
          <h2>Hi, I'm Rahees</h2>
        <p> A budding front-end developer from Kerala, India. Armed with a postgraduate degree in Computer Science, I'm passionate about diving into the world of web development. Proficient in HTML, CSS, and JavaScript, I'm currently honing my skills in React. Beyond coding, I bring a solid understanding of Machine Learning and Deep Learning algorithms to add a unique touch to my work.
        </p>
        <a className="download_button" href={cv}  download="RAHEES T M" target='blank' rel="noreferrer">Download CV
        <span>< FontAwesomeIcon className='download-icon' icon={faDownload} /></span></a>
      </div>
      <div className="skills">
         <SkillProgress/> 
      </div>
      </div>
      
    </section>
  )
}

export default About