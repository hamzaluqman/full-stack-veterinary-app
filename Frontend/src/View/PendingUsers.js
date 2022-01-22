import React from 'react'

import UserSideBar from '../Components/UserSideBar';
import TopBanner from '../Components/TopBanner';
import PendingUserTable from '../Components/PendingUserTable';
//import UserSearch from '../Components/UserSearch';
import UserSearch from '../Components/UserSearch';
//import Navbar from '../Components/Navbar';


const PendingUsers = () => {
    return (
        <div className = "pending-requests">
            <TopBanner />
            {/* <Navbar></Navbar> */}
            <UserSideBar></UserSideBar>
            <PendingUserTable></PendingUserTable>
            <UserSearch></UserSearch>
        </div>
    )
}

export default PendingUsers
