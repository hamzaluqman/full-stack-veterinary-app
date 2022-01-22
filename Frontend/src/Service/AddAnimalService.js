import axios from 'axios';

const ANIMAL_API_BASE_URL = "http://localhost:8080/animal/";

class AddAnimalService {   
    

    createnimal(animal){
        
        axios.post(ANIMAL_API_BASE_URL, animal).then( console.log("logged"));
    }


}

export default new AddAnimalService()