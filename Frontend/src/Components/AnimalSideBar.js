import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AnimalSideBar.css'

const AnimalSideBar = () => {
    return (
        <>       
        <div className = "side-bar" >
        <br/><br/>
        <Link to='/reminders'>
            <div className="animal-menu" >                
                <div className = "animal-menu-icon"> <FaIcons.FaBell size = '0.9cm' /> </div> 
                    <span className ='animal-menu-text'> Reminders</span> 
            </div> 
        </Link>
        
        <Link to='/alert'>
                <div className="animal-menu">
                    <div className = "animal-menu-icon"> <FaIcons.FaEnvelope size = '0.9cm' /> </div>
                    <span className ='animal-menu-text'>Send Alert </span> 
                </div>
        </Link>
        
        <Link to='/booking'>
                <div className="animal-menu"> 
                    <div className = "animal-menu-icon"> <FaIcons.FaCalendarAlt size = '0.9cm' /> </div>
                    <span className ='animal-menu-text'>Book Animal </span> 
                </div>
        </Link>
        
        <Link to='/consultation'>
                <div className="animal-menu"> 
                    <div className = "animal-menu-icon"> <FaIcons.FaUserMd size = '0.9cm' /> </div>
                    <span className ='animal-menu-text'>Consultation </span> 
                </div>
        </Link>
        
        <Link to='/animals'>
                <div className="animal-menu"> 
                    <div className = "animal-menu-icon"> <FaIcons.FaPaw size = '0.9cm' /> </div>
                    <span className ='animal-menu-text'>Animals Profile </span> 
                </div>
        </Link>
        
        <Link to='/comments'>
                <div className="animal-menu"> 
                    <div className = "animal-menu-icon"> <FaIcons.FaCommentDots size = '0.9cm' /> </div>
                    <span className ='animal-menu-text'>Comment </span> 
                </div>
        </Link>
        
        <Link to='/addanimal'>
                <div className="animal-menu"> 
                    <div className = "animal-menu-icon"> <FaIcons.FaCogs size = '0.9cm' /> </div>
                    <span className ='animal-menu-text'>Animal Setting</span> 
               </div>            
        </Link> 
        
        </div>
        
        </>
    )
}

export default AnimalSideBar
