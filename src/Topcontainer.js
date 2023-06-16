import React from 'react'
import { Link } from 'react-scroll'
import images1 from "../src/images/images1.jpg"

function Topcontainer() {
  return (
    <div className='topcontent' id='about'>
      <img className='images' src={images1}></img>
          <div className='topcontent-container'>
            <h1>Mohamed Ashiq A</h1>
            <h2>Web developer</h2>
            <a href='https://drive.google.com/file/d/12ASHy_6KMa_8bNvEt-LMsl01Vjn89Lbu/view?usp=drivesdk'>
                <button className='download-button'>Download CV</button>
            </a>
            <Link to='contact' smooth={true} duration={500}>
                <button className='work-button'>Contact</button>
            </Link>

          </div>
    </div>
  )
}

export default Topcontainer