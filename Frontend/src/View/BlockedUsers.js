import React from 'react'
import UserSideBar from '../Components/UserSideBar';
import TopBanner from '../Components/TopBanner';
import BlockedUserTable from '../Components/BlockedUserTable';
import UserSearch from '../Components/UserSearch';
//import Navbar from '../Components/Navbar';

const BlockedUsers = () => {
    return (

        <div className = "blocked-users">
            <TopBanner />
            {/* <Navbar></Navbar> */}
            <UserSideBar></UserSideBar>
            <BlockedUserTable></BlockedUserTable>
            <UserSearch></UserSearch>
        </div>
    )
}

export default BlockedUsers
