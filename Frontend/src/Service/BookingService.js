import axios from 'axios';

const BOOKING_API_BASE_URL = "http://localhost:8080/booking/";

class BookingService {

    getBooking(){
        return axios.get(BOOKING_API_BASE_URL);
    }

    createBooking(booking){
        console.log(booking.bookingDate)
        console.log(booking.returnDate)
        console.log(booking.animalID)
        axios.post(BOOKING_API_BASE_URL, booking).then( console.log("logged inside service"));
    }

}

export default new BookingService()