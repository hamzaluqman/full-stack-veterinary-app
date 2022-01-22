import React from 'react'
import TopBanner from '../Components/TopBanner';
import AnimalSideBar  from '../Components/AnimalSideBar';
import AnimalBooking from '../Components/AnimalBooking';
import Search from '../Components/Search';
import AnimalProfile from '../Components/AnimalProfile';

const ReminderView = () => {
    return (
        <div>           
             <TopBanner /><AnimalSideBar/><AnimalBooking/>
             
        </div>
    )
}

export default ReminderView
