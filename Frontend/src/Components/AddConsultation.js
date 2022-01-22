import React, { Component } from 'react'
import TopBanner from './TopBanner'
import './AddConsultation.css'
import AddConsultationService from '../Service/AddConsultationService'
import { Link } from 'react-router-dom';

export default class AddConsultation extends Component {

    constructor(props){
        super(props)
        // These are DB columns
        this.state = {    
            animalid : '',
            consultationdate: '',
            diagnosis : '',
            treatment: '',
            prescription : '',
            ucid: ''
        } 
        this.handleUCIDChange = this.handleUCIDChange.bind(this);
        this.handleAnimalIDChange = this.handleAnimalIDChange.bind(this);      
    }

    handleAnimalIDChange = (e) =>{
        this.setState({
            animalid: e.target.value
            })
    }

    handleConsultationDateChange = (e) =>{
        this.setState({
            consultationdate: e.target.value
            })
    }

    handleDiagnosisDateChange = (e) =>{
        this.setState({
            diagnosis: e.target.value
            })
    }

    handleTreatmentChange = (e) =>{
        this.setState({
            treatment: e.target.value
            })
    }

    handlePrescriptionChange = (e) =>{
        this.setState({
            prescription: e.target.value
            })
    }

    handleUCIDChange = (e) =>{
        this.setState({
            ucid: e.target.value
            })
    }

    handleSubmit = (e) =>{
         alert(`${"Values submitted"}`)     // submit alert 
       // e.preventDefault()  // to persist form data after submit 
        
        const consultation = {animalID : this.state.animalid, consultationDate : this.state.consultationdate, 
            diagnosis : this.state.diagnosis, treatment: this.state.treatment,
            prescription: this.state.prescription, ucid : this.state.ucid};

        console.log(consultation);// JSON.stringify(booking));
        AddConsultationService.createConsultation(consultation);

    }

    render() {

        return (
            <div>   
                <TopBanner />         
                <div className = "form-add-consultation">
          
                <form className = 'form-1' >

                <label className = "labels-form-title">Consultation</label>
                <br/><br/> <br/>
                 
                <label className = "labels-form">Animal ID</label>
                <input type="text" className ="input-form" value = {this.state.animalid} onChange={this.handleAnimalIDChange}/>
                <br/> 

                <label className = "labels-form">Consultation Date</label>
                <input type="date" className ="input-form" value={this.state.consultationdate} onChange={this.handleConsultationDateChange} />
                <br/> 

                <label className = "labels-form">Diagnosis </label>
                <input type = "text" className ="input-form" value={this.state.diagnosis} onChange={this.handleDiagnosisDateChange}  />                
                <br/>

                <label className = "labels-form">Treatment </label>
                <input type = "text" className ="input-form" value={this.state.treatment} onChange={this.handleTreatmentChange}  />                
                <br/>

                <label className = "labels-form">Prescription</label>
                <input type = "text" className ="input-form" value={this.state.prescription} onChange={this.handlePrescriptionChange}  />                
                <br/>

      
                <label className = "labels-form">UCID</label>
                <input type="text" className ="input-form" value={this.state.ucid} onChange={this.handleUCIDChange}/>
                <br/> 
              
                <button type="submit" className ="form-button" onClick={this.handleSubmit}>Submit</button>
                <Link to='/consultation'> <button type="cancel" className ="form-button">Cancel</button> </Link>                 
             
          </form>
          </div>
            </div>
        )

    }
    
}
