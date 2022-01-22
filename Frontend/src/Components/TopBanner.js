import React, { useState } from 'react';
import image from './UCalgary.svg'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import { ToggleMenuData } from './Toggle MenuData';
import * as AiIcons from 'react-icons/ai';
import './ToggleMenu.css';
import { IconContext } from 'react-icons';


const TopBanner = () => {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
    
return (
    <> 
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>          
          <Link to='#' className='menu-bars'>             
                <FaIcons.FaBars onClick={showSidebar} />
          </Link>      
            <img src = {image} width ="30%" height ="50%" alt="UCalgary logo"/>
            <h2> FACULTY OF VETERINARY MEDICINE </h2>       
            
            <div className='user-icon'><p>User Name <FaIcons.FaUser size = '0.9cm'/></p> </div>
            <Link to='/'><div className = 'logout-link'>Log Out</div></Link>
        
        </div>
       
        </IconContext.Provider>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='navbar-toggle'>
              <Link to='/animals' className='menu-bars'>
                <FaIcons.FaPaw /> Animals
              </Link>
            </li>
            <li className='navbar-toggle'>
              <Link to='/users' className='menu-bars'>
                <FaIcons.FaUsers /> Users
              </Link> 
            </li>
          </ul>
        </nav>
    </>

    )
}

export default TopBanner
