import React from 'react'
import TopBanner from '../Components/TopBanner';
import AnimalSideBar  from '../Components/AnimalSideBar';
import Comments from '../Components/Comments';
import Search from '../Components/Search';
import AnimalProfile from '../Components/AnimalProfile';

const CommentsView = () => {
    return (
        <div>
            <TopBanner /><AnimalSideBar/> <Comments/>
            
        </div>
    )
}

export default CommentsView
