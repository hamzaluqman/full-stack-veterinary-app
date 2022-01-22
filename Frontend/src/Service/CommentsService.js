import axios from 'axios';

const REMINDER_API_BASE_URL = "http://localhost:8080/comment/";

class CommentsService {
    getComment() {
        return axios.get(REMINDER_API_BASE_URL);
    }

    createComment(comment){
        console.log(comment.entryDate)
        console.log(comment.comment)
        console.log(comment.animalID)
        axios.post(REMINDER_API_BASE_URL, comment).then( console.log("logged"));
    }


}

export default new CommentsService()