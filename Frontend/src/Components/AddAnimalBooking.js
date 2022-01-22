// import React from 'react'
// import TopBanner from './TopBanner'
// import './AddAnimalBooking.css'
// import { Link } from 'react-router-dom';

// export default function AddAnimalBooking() {
//     return (
//         <div>   
//             <TopBanner />         
//             <form>
                
//               <div class="form-add-booking">
//                 <label class = "labels-form-title">Add Animal Booking</label>
//                 <br/><br/> <br/>
                
//                 <label class = "labels-form">Date of Booking</label>
//                 <br/><input type="date" class="input-form"  />
//                 <br/> 

//                 <label class = "labels-form">Date of Return</label>
//                 <br/><input type = "date" class="input-form" />                
//                 <br/>

//                 <label class = "labels-form">Booker Name  </label>
//                 <br/><input type="text" class="input-form"  />
//                 <br/>

//                 <label class = "labels-form">Animal Type</label>
//                 <br/><input type="text" class="input-form"  />
//                 <br/>

//                 <button type="submit" class="form-button-booking">Submit</button>
//                 <Link to='/booking'> <button type="submit" class="form-button-booking">Cancel</button> </Link>
//              </div>  
             
//             </form>
//         </div>
//     )
// }
import React, { Component } from 'react'
import TopBanner from './TopBanner'
import './AddAnimalBooking.css'
import AddBookingService from '../Service/BookingService'
import { Link } from 'react-router-dom';

export default class AddAnimalBooking extends Component {

    constructor(props){
        super(props)
        // These are DB columns
        this.state = {    
            animalid : '',
            bookingdate: '',
            returndate : '',
            ucid : ''
        } 
        this.handleUCIDChange = this.handleUCIDChange.bind(this);
        this.handleAnimalIDChange = this.handleAnimalIDChange.bind(this);      
    }

    handleAnimalIDChange = (e) =>{
        this.setState({
            animalid: e.target.value
            })
    }

    handleBookingDateChange = (e) =>{
        this.setState({
            bookingdate: e.target.value
            })
    }

    handleReturnDateChange = (e) =>{
        this.setState({
            returndate: e.target.value
            })
    }

    handleUCIDChange = (e) =>{
        this.setState({
            ucid: e.target.value
            })
    }

    handleSubmit = (e) =>{
        // alert(`${"Values submitted"}`)     // submit alert 
        e.preventDefault()  // to persist form data after submit 
        
        const booking = {animalID : this.state.animalid, bookingDate : this.state.bookingdate, returnDate : this.state.returndate,
             ucid : this.state.ucid };

        console.log(booking);// JSON.stringify(booking));
        AddBookingService.createBooking(booking);

    }


    
    render(){
        return(
            <div>
            <TopBanner/>
            <div className = "form-add-reminder">
          
            <form className = 'form-1' >

            <label className = "labels-form-title">Add Animal Booking</label>
                <br/><br/> <br/>
                   
                <label className = "labels-form">Animal ID</label>
                <input type="text" className ="input-form" value = {this.state.animalid} onChange={this.handleAnimalIDChange}/>
                <br/> 

                <label className = "labels-form">Booking Date</label>
                <input type="date" className ="input-form" value={this.state.bookingdate} onChange={this.handleBookingDateChange} />
                <br/> 

                <label className = "labels-form">Return Date  </label>
                <input type = "date" className ="input-form" value={this.state.returndate} onChange={this.handleReturnDateChange}  />                
                <br/>

        
                <label className = "labels-form">UCID</label>
                <input type="text" className ="input-form" value={this.state.ucid} onChange={this.handleUCIDChange}/>
                <br/> 
                
                <button type="submit" className ="form-button" onClick={this.handleSubmit}>Submit</button>
                <Link to='/reminders'> <button type="cancel" className ="form-button">Cancel</button> </Link>

                    
               
            </form>
            </div>
            </div>
        )
    }
}