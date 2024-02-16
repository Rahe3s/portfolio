import React from 'react'
import {skill_details} from '../../contents'
import './SkillProgress.css'
import ProgressBar from "@ramonak/react-progress-bar";
const SkillProgress = () => {
  return (
    <div>
        {skill_details.map(({skill,percentage},index)=>{
            return(
                <div>
                    <h3>{skill}</h3>
                    <ProgressBar  completed={percentage} > </ProgressBar>
                </div>
            )
        })}
    </div>
  )
}

export default SkillProgress