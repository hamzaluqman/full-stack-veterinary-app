import React,{Component} from 'react';
import './AnimalProfile.css';
import * as FaIcons from 'react-icons/fa';
import EditAnimalService from '../Service/EditAnimalService';
import { Link } from 'react-router-dom';
import TopBanner from '../Components/TopBanner';

export default class AnimalProfile extends Component{
    

    constructor(props){
        super(props)
        
        this.state = {
            name: '',
            id:'',
            weight: '',
            tattoo: '',
            age:'',
            birthdate:'',
            availability:'',
            animalstatus :'',
            animaltype:'',
            breed:'',
            sex:'',
            coatcolor:'',
            problem:'',            
            comment:'',
            medication:'',
            instruction:'',
            diet:'',
            rfid:'',
            microchip:'',
            treatment:'',
            animaltype:'',
            availability: ''
        }        
    }

    

    handleNameChange = (event) =>{
        this.setState({
            name: event.target.value
            })
    }
    handleIDChange = (event) =>{
        this.setState({
            id: event.target.value
            })
    }    
    handleWeightChange = (event) =>{
        this.setState({
            weight: event.target.value
            })
    }

    handleTattooChange = (event) =>{
        this.setState({
            tattoo: event.target.value
            })
    }    
    handleAgeChange = (event) =>{
        this.setState({
            age: event.target.value
            })
    }    
    handleBirthDateChange = (event) =>{
        this.setState({
            birthdate: event.target.value
            })
    } 
    
    handleStatusChange = (event) =>{
        this.setState({
            animalstatus: event.target.value
        })
    }
    
    handleAvailabilityChange = (event) =>{
        this.setState({
            availability: event.target.value
        })
    }

    handleAnimalTypeChange = (event) =>{
        this.setState({
            animaltype: event.target.value
        })
    }

    handleBreedChange = (event) =>{
        this.setState({
            breed: event.target.value
            })
    }

    handleSexChange = (event) =>{
        this.setState({
            sex: event.target.value
            })
    }    

    handleCoatColorChange = (event) =>{
        this.setState({
            coatcolor: event.target.value
            })
    }    

    handleProblemChange = (event) =>{
        this.setState({
            problem: event.target.value
            })
    }    
    handleCommentChange = (event) =>{
        this.setState({
            comment: event.target.value
            })
    }    
    handleMedicationChange = (event) =>{
        this.setState({
            medication: event.target.value
            })
    }    
    handleInstructionChange = (event) =>{
        this.setState({
            instruction: event.target.value
            })
    }    
    handleDietChange = (event) =>{
        this.setState({
            diet: event.target.value
            })
    }    
    handleRFIDChange = (event) =>{
        this.setState({
            rfid: event.target.value
            })
    }    
    handleMicroChipChange = (event) =>{
        this.setState({
            microchip: event.target.value
            })
    }    
    handleTreatmentChange = (event) =>{
        this.setState({
            treatment: event.target.value
            })
    } 
    
    
    handleAnimalTypeChange = (event) =>{
        this.setState({
            animaltype: event.target.value
            })
    }    
    handleAvailabilityChange = (event) =>{
        this.setState({
            availability: event.target.value
            })
    } 
    
    handleSubmit = (event) =>{
        alert(`${"Values submitted"}`)     // submit alert 
        event.preventDefault()  // to persist form data after submit 
    const animal = {animalID : this.state.id, name :this.state.name,weight : this.state.weight,
                    tattooNum : this.state.tattoo,birthDate : this.state.birthdate, 
                    animalType: this.state.animaltype,animalStatus : this.state.animalstatus, 
                    availability : this.state.availability, breed : this.state.breed,
                    sex : this.state.sex, coatColor : this.state.coatcolor, rfid : this.state.rfid   
                };

       console.log(animal);// JSON.stringify(booking));
       EditAnimalService.editAnimal(animal);
        
       
    }
    

  
    render(){
        return(
                <>
                <TopBanner/>
                
            <div className = "form-profile">                                 
                 <h3>Edit Animal Profile</h3>
            <form className = 'form-1' onSubmit = {this.handleSubmit} role="dialog"  tabIndex={-1} >                              
               

            <div className = 'form-Labels'>
                    <label>Animal ID</label>
                </div>
           
            <input type = 'text' className = 'form-text' value = {this.props.id} onChange = {this.handleIDChange} />
                
                <div className = 'form-Labels' >
                    <label> Name</label>
                </div>          
                
                <input type = 'text' className = 'form-text' value = {this.state.name} onChange = {this.handleNameChange} />
                
                <div className = 'form-Labels'>
                    <label>Weight</label>
                </div>
           
                <input type = 'number' className = 'form-num' min="0" value = {this.state.weight} onChange = {this.handleWeightChange} />
                              
                <div className = 'form-Labels'>
                    <label>Tattoo#</label>
                </div>
                           
                <input type = 'text' className = 'form-text' value = {this.state.tattoo} onChange = {this.handleTattooChange}/>
                           
                {/* <div className = 'form-Labels'>
                     <label>Age</label>
                </div>
           
                <input type = 'number' className = 'form-num' min="0" value = {this.state.age} onChange = {this.handleAgeChange}/> */}
                        
                <div className = 'form-Labels'>
                    <label>BirthDate</label>
                </div>
           
                <input type = 'date' className = 'form-date' value = {this.state.birthdate} onChange = {this.handleBirthDateChange}/>
                             
                
                <div className = 'form-Labels'>
                    <label>Availability</label>
                </div> 

                <select value = {this.state.availability} onChange = {this.handleAvailablityChange} className = 'form-select'>
                      <option value = "Available">Available</option>
                      <option value = "NotAvailable">Not Available</option>
                      <option value = "booked">Booked</option>
                </select>               

                <div className = 'form-Labels' >
                    <label>Status</label>
                </div>          
                
                <input type = 'text' className = 'form-text' value = {this.state.animalstatus} onChange = {this.handleStatusChange} />

                <div className = 'form-Labels' >
                    <label> Animal Type</label>
                </div>          
                
                <input type = 'text' className = 'form-text' value = {this.state.animaltype} onChange = {this.handleAnimalTypeChange} />

                <div className = 'form-Labels'>
                    <label>Breed</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.breed} onChange = {this.handleBreedChange}/>
                
                <div className = 'form-Labels'>
                    <label>Sex</label>
                </div>
           
                <select value = {this.state.sex} onChange = {this.handleSexChange} className = 'form-select'>
                      <option value = "Female">Female</option>
                      <option value = "Male">Male</option>
                 </select>              

                <div className = 'form-Labels'>
                    <label>Coat Color</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.coatcolor} onChange = {this.handleCoatColorChange}/>
                
                {/* <div className = 'form-Labels'>
                    <label>Problem</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.problem} onChange = {this.handleProblemChange}/> */}
                
                {/* <div className = 'form-Labels'>
                    <label>Comment</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.comment} onChange = {this.handleCommentChange}/> */}
                
                {/* <div className = 'form-Labels'>
                    <label>Continious Medication</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.medication} onChange = {this.handleMedicationChange}/>
                
                <div className = 'form-Labels'>
                    <label>Special Instructions</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.instruction} onChange = {this.handleInstructionChange}/>
                
                <div className = 'form-Labels'>
                    <label>Special Diet</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.diet} onChange = {this.handleDietChange}/> */}
                
                <div className = 'form-Labels'>
                    <label>RFID</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.rfid} onChange = {this.handleRFIDChange}/>
                
                {/* <div className = 'form-Labels'>
                    <label>Microchip</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.microchip} onChange = {this.handleMicroChipChange}/>
            
                <div className = 'form-Labels'>
                    <label>Treatment</label>
                </div>
           
                <input type = 'text' className = 'form-text' value = {this.state.treatment} onChange = {this.handleTreatmentChange} /> */}
                
                <button type="submit" class="form-button" onClick={this.handleSubmit}>Submit</button>
                <Link to='/addanimal'> <button type="submit" className='form-cancel'>Cancel</button> </Link> 

            </form> 
        </div>
        </>
        )
    }
}