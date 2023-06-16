import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { Link } from 'react-scroll';
import React, { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="header">
      <div className="header-left">
        <h1>Mohamed Ashiq</h1>
      </div>
      
      <div className={`header-right ${clicked ? 'active' : ''}`}>
      <div id='clck' >
        <Link to='about' smooth={true} duration={500}>
          <h4>About me</h4>
        </Link>
        <Link to='Skills' smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to='Projects' smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to='Contacts' smooth={true} duration={500}>
          <h4>Contacts</h4>
        </Link>
        </div>
    
        
      </div>
      <div className='bars' onClick={handleClick}> 
    {clicked ? (
          <FontAwesomeIcon icon={faXmark} onClick={handleClick} />
        ) : (
          <FontAwesomeIcon icon={faBars}onClick={handleClick} />
        )}
      </div>
    
   
    </div>
  );
}

export default App;
