import React from 'react'
import TopBanner from '../Components/TopBanner';
import AnimalSideBar  from '../Components/AnimalSideBar';
import Consultation from '../Components/Consultation'
import Search from '../Components/Search';
import AnimalProfile from '../Components/AnimalProfile';

const ConsultationView = () => {
    return (
        <div>
             <TopBanner /><AnimalSideBar/><Consultation/>
             
        </div>
    )
}

export default ConsultationView
