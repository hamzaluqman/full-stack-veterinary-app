import React from 'react'
import TopBanner from '../Components/TopBanner';
import AnimalSideBar  from '../Components/AnimalSideBar';
import Alerts from '../Components/Alert';
import AnimalProfile from '../Components/AnimalProfile';
import Search from '../Components/Search';

const AlertView = () => {
    return (
        <div>
            <TopBanner /> <AnimalSideBar/><Alerts/>
                                 
        </div>
    )
}

export default AlertView
