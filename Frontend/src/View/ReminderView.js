import React from 'react'
import TopBanner from '../Components/TopBanner';
import AnimalSideBar  from '../Components/AnimalSideBar';
import AnimalProfile from '../Components/AnimalProfile';
import Reminders from '../Components/Reminders'
import Search from '../Components/Search';


const ReminderView = () => {
    return (
        <div>
             <TopBanner /><AnimalSideBar/><Reminders/>
             
        </div>
    )
}

export default ReminderView
