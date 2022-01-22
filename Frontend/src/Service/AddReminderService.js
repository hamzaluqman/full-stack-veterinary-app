import axios from 'axios';

const REMINDER_API_BASE_URL = "http://localhost:8080/reminder/";

class AddReminderService {

    getReminder(){
        return axios.get(REMINDER_API_BASE_URL);
    }

    createReminder(reminder){

        console.log(reminder.animalID)
        axios.post(REMINDER_API_BASE_URL, reminder).then( console.log("logged"));
    }

}

export default new AddReminderService()