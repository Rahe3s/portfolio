import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import bg from '../../assets/home-bg.png'
import './Home.css'


function Home() {

   
  return (
    <section className='home'>
      
      
      <img src={bg} alt="" className="home-bg-img" />
      

      <div className='intro'>
        <h2 >Hi There, I am</h2>
        <h1 data-text='Frontend Devoloper.'>Frontend Devoloper.</h1>
        <p> Sculpting lively React interfaces with HTML, CSS, and a passion for vibrant user experiences.</p>
        
      
      <div className="icons">
      <a href='https://github.com/Rahe3s' target="_blank" rel="noreferrer">< FontAwesomeIcon className='icon' icon={faGithub} /></a>
      <a href='https://www.linkedin.com/in/rahees-t-m/' target="_blank" rel="noreferrer"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>

      </div>
      </div>
    </section>
  )
}

export default Home