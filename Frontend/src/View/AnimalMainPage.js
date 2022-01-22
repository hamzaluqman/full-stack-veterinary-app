import React from 'react'
import TopBanner from '../Components/TopBanner';
import AnimalSideBar  from '../Components/AnimalSideBar';
// import Search from '../Components/Search';
// import AnimalProfile from '../Components/AnimalProfile';
// import Reminders from '../Components/Reminders';
import AnimalTable from '../Components/AnimalTable';

const AnimalMainPage = () => {
    return (
        <div>
             <TopBanner />
             <AnimalSideBar/> 
             <AnimalTable/>
        </div>
    )
}

export default AnimalMainPage
