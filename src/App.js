
import './App.css';

import { Link } from 'react-scroll';
function App() {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Mohamed Ashiq</h1>
      </div>
      <div className='header-right'>
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
  );
}

export default App;
