import React,{useState,useEffect} from 'react'
import AnimalProfile from './AnimalProfile'
import './Search.css'

function Search() {
    
    const [animalID, setAnimalID] = React.useState([]);
    const [searchItem,setSearchItem] = React.useState([]);
    const [animal, setAnimal] = useState([])
    
    const fetchAnimal = async () => {
        fetch(`http://localhost:8080/animal/profile/${animalID}`).then((result) => {
            result.json().then((resp) => {
            setAnimal(resp)    
            console.log(animal)
        })
    })
};
    


    // const fetchAnimal = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:8080/animal/profile/${animalID}`);
    //         const result = await response.json();
    //         console.log("result set");
    //         console.log(result);
    //         } catch (error) {
    //         console.log("error", error);
    //         }
    // };
 
    return (
        <div>         
            

            <input  type="text" className='search-input' value = {animalID} 
            onChange = {(e) => setAnimalID(e.target.value)} placeholder="Enter the Animal ID"  />
            
            <button type="submit" className='search-button' onClick = {() => fetchAnimal()}>Search</button>
            
            <br/><br/>  
        </div>
    )
}

export default Search


