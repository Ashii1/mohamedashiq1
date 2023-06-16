import React from 'react'
import Image1 from "../src/images/image1.jpg"
import { LinearProgress } from '@mui/material'

function Skill() {
  return (
    <div className='skill-container' id='Skills'>
        <div  className='skill-img'>
          <img src={Image1}  alt=''></img>
        </div>
        <div className='skillcontainer-text'>
            <h2>SkillSet</h2>
         <div  className='skillcontainer-skillset'>
            <h5>HTML</h5>
            <div className='skillcontainer-slider   skillcontainer-slider1'>
                <LinearProgress  variant="determinate" value={90} ></LinearProgress>
            </div>
         </div>

         <div  className='skillcontainer-skillset'>
            <h5>CSS</h5>
            <div className='skillcontainer-slider  skillcontainer-slider2'>
                <LinearProgress  variant="determinate" value={70} ></LinearProgress>
            </div>
         </div>

         <div  className='skillcontainer-skillset'>
            <h5>Javascript</h5>
            <div className='skillcontainer-slider  skillcontainer-slider3'>
                <LinearProgress  variant="determinate" value={60} ></LinearProgress>
            </div>
         </div>
         <div  className='skillcontainer-skillset'>
            <h5>Java</h5>
            <div className='skillcontainer-slider  skillcontainer-slider4'>
                <LinearProgress  variant="determinate" value={80} ></LinearProgress>
            </div>
         </div>
         <div  className='skillcontainer-skillset'>
            <h5>React</h5>
            <div className='skillcontainer-slider skillcontainer-slider5'>
                <LinearProgress  variant="determinate" value={70} ></LinearProgress>
            </div>
         </div>
         <div  className='skillcontainer-skillset'>
            <h5>SQL</h5>
            <div className='skillcontainer-slider skillcontainer-slider6'>
                <LinearProgress  variant="determinate" value={90} ></LinearProgress>
            </div>
         </div>
        </div>
    
    </div>
  )
}

export default Skill