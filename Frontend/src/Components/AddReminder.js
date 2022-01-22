import React,{Component} from 'react'
import './AddReminder.css'
import AddReminderService from '../Service/AddReminderService'
import { Link } from 'react-router-dom';
import TopBanner from './TopBanner'

export default class AddReminder extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            animalid : '',
            entrydate: '',
            reminder : '',
            duedate : '',
            ucid : ''
        } 
        this.handleUCIDChange = this.handleUCIDChange.bind(this);
        this.handleAnimalIDChange = this.handleAnimalIDChange.bind(this);      
    }
   
    handleAnimalIDChange = (event) =>{
        this.setState({
            animalid: event.target.value
            })
    }

    handleEntryDateChange = (event) =>{
        this.setState({
            entrydate: event.target.value
            })
    }

    handleReminderChange = (event) =>{
        this.setState({
            reminder: event.target.value
            })
    }

    handleDueDateChange = (event) =>{
        this.setState({
            duedate: event.target.value
            })
    }

    handleUCIDChange = (event) =>{
        this.setState({
            ucid: event.target.value
            })
    }


    handleSubmit = (event) =>{
        
        alert(`${"Values submitted"}`)     // submit alert 
        //event.preventDefault()  // to persist form data after submit 
        
        const reminder = {animalID : this.state.animalid,entryDate : this.state.entrydate, reminderDescription : this.state.reminder,
            dueDate : this.state.duedate, ucid : this.state.ucid };

        console.log(reminder);// JSON.stringify(booking));
        AddReminderService.createReminder(reminder);
        
    }

    render(){
        return(          
            <>
            <TopBanner /> 
            <div className = "form-add-reminder">
            <form className = 'form-1' >
                

            <label className = "labels-form-title">Add Reminders</label>
                <br/><br/> <br/>
                   
                <label className = "labels-form">Animal ID  &nbsp;</label>
                <input type="text" className ="input-form" value = {this.state.animalid} onChange={this.handleAnimalIDChange}/>
                <br/> 

                <label className = "labels-form">Entry Date</label>
                <input type="date" className ="input-form" value={this.state.entrydate} onChange={this.handleEntryDateChange} />
                <br/> 

                <label className = "labels-form">Reminder  </label>
                <input type = "text" className ="input-form" value={this.state.reminder} onChange={this.handleReminderChange}  />                
                <br/>

                <label className = "labels-form">Due Date &nbsp;</label>
                <input type="date" className ="input-form" value = {this.state.duedate} onChange={this.handleDueDateChange} />
        
                <br/>
        
                <label className = "labels-form">UCID  &nbsp; &nbsp; &nbsp; &nbsp; </label>
                <input type="text" className ="input-form" value={this.state.ucid} onChange={this.handleUCIDChange}/>
                <br/> 
                
                <button type="submit" className ="form-button" onClick = {this.handleSubmit}>Submit</button>
                <Link to='/reminders'> <button type="cancel" className ="form-button">Cancel</button> </Link>

            </form>
            </div>
            </>
        )
    }
}