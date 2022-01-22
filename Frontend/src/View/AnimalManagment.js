import React from 'react';
import '../index.css';
//import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Animals from '../pages/Animals';
import Reminders from '../Components/Reminders';
import AnimalBooking from '../Components/AnimalBooking'
import Consultation from '../Components/Consultation';
import Comments from '../Components/Comments';
import Alert from '../Components/Alert';
import Photos from '../Components/Photos'
import AnimalProfile from '../Components/AnimalProfile'
import UserSideBar from '../Components/UserSideBar';
import TopBanner from '../Components/TopBanner';

const UserManagement = () => {
        return(
            <>
                <input  type="text" style = {{width:'15%', height: '2em' }}   
                    id="header-search"  placeholder="Enter the Animal ID" name="s"  />
                &nbsp;&nbsp; <button type="submit" style = {{width:'10%', height: '2em' }}>Search</button>
                <br/><br/>
            
            </>             
        )
}

export default UserManagement