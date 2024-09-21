import React from 'react';
import './navbar.css';
import logo from '../../assets/logo3.jpg';
import contact from '../../assets/contact.png';
import { Link} from 'react-scroll';

//import { useNavigate  } from 'react-router-dom';
//import { useLocation , handleNavigation } from 'react-router-dom';


const Navbar = () => {
   
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  return (

    <div>
      <nav className="navbar">
          <img src={logo} alt="Logo" className='logo' />
          <div className="desktopMenu">
    
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem"> About</Link>
          <Link className="desktopMenuListItem"> Portfolio</Link>
          

          </div>
          <button className="desktopMenuBtn" onClick={scrollToContact} > 
            
            <img src={contact}  alt=" " className="desktopMenuImg"/>Contact Me</button>
      </nav> 
    </div>
  )
}

export default Navbar;
