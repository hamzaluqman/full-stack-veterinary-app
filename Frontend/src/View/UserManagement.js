import React from 'react'
import UserSideBar from '../Components/UserSideBar';
import TopBanner from '../Components/TopBanner';
import UserTable from '../Components/UserTable';
import UserSearch from '../Components/UserSearch';

const UserManagement = () => {
    return (
        <div className = "user-management">
            <TopBanner />
            <UserSideBar></UserSideBar>
            <UserTable></UserTable>
            <UserSearch></UserSearch>
        </div>
    )
}

export default UserManagement
