import axios from 'axios';

const EDITANIMAL_API_BASE_URL = "http://localhost:8080/animal/profile";

class EditAnimalService {   
    

    editAnimal(animal){
        //console.log(animal.animalID)
        axios.put(EDITANIMAL_API_BASE_URL, animal).then( console.log("logged"));
    }


}

export default new EditAnimalService()