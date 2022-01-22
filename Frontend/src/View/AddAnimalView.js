import React from 'react'
import TopBanner from '../Components/TopBanner';
import AnimalSideBar  from '../Components/AnimalSideBar';
import AddAnimal from '../Components/AddAnimal';
import Search from '../Components/Search';
import AddNewAnimal from '../Components/AddNewAnimal';

const AddAnimalView = () => {
    return (
        <div>
             <TopBanner />
             <AnimalSideBar/>    
               <AddNewAnimal/>
        </div>
    )
}

export default AddAnimalView
