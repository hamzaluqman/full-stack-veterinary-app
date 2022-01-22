import axios from 'axios';

const REMINDER_API_URL = "http://localhost:8080/reminder/";

class ReminderService{

    getAnimals(){
       return axios.get(REMINDER_API_URL);
    }

}
export default new ReminderService();
