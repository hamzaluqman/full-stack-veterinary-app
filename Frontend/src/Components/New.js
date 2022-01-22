import React,{useState,useEffect} from 'react'
import AnimalProfile from './AnimalProfile'
import './Search.css'



function New() {

    const [animalID, setAnimalID] = React.useState([]);
    const [searchItem,setSearchItem] = React.useState([]);
    const [animal, setAnimal] = useState([])
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [type, setAnimalType] = useState("");
    const [animalId,setAnimalId]=useState(null)
    
    

    const fetchAnimal = async () => {
        fetch(`http://localhost:8080/animal/profile/${animalID}`).then((result) => {
            result.json().then((resp) => {
            setAnimal(resp)
            setName(resp[0].name)
            // console.log("setResp")
            // console.log(resp)
            // console.log("setAnimal")            
            // console.log(animal)
            // setName(resp[0].name)
            // setWeight(resp[0].weight)
            // setAnimalType(resp[0].animalType)
            // setAnimalId(resp[0].animalID)
        })
          })
    };


    function selectUser(id)
    {
        let item = animal[id-1];
  
          setName(item.name)
          setWeight(item.weight)
          setAnimalType(item.animalType);
          setAnimalId(item.animalId)
    }

    return (
        <div>
             <input  type="text" className='search-input' value = {animalID} 
            onChange = {(e) => setAnimalID(e.target.value)} placeholder="Enter the Animal ID"  />
            
            <button type="submit" className='search-button' onClick = {() => fetchAnimal()}>Search</button>  
{/*         
            <div className="users">
                {animal.map((user) => (
            <div className="user">{user}</div>
            ))} */}
    </div>


    
       
    )
}

export default New
