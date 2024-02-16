import React from 'react'
import { project_details } from '../../contents'
import './Project.css'

function Project() {
  return (
    <section className='project'>
      
      <div className="project_header">
        <h1>Projects</h1>

      </div>
      <div className="project_list">
        {project_details.map(({img,title,description,link},index)=>{
          return(
        <div className="project_card">
          <img src={img} alt="sample" />
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={link} target='blank' rel="noreferrer">Know More</a>
        </div>
        )
      })}
      </div>
      
    </section>
  )
}

export default Project