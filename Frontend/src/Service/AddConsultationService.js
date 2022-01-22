import axios from 'axios';

const REMINDER_API_BASE_URL = "http://localhost:8080/consultation/";

class AddConsultationService {
    getConsultation() {
        return axios.get(REMINDER_API_BASE_URL);
    }

    createConsultation(consultation){
        console.log(consultation.techApproval)
        console.log(consultation.adminApproval)
        console.log(consultation.animalID)
        axios.post(REMINDER_API_BASE_URL, consultation).then( console.log("logged"));
    }


}

export default new AddConsultationService()