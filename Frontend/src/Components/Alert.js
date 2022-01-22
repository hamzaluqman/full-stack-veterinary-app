import React from 'react'
import './Alert.css'
import AnimalProfile from './AnimalProfile';

function Alert() {
    
    const handleSubmit = (event) =>{
        alert(`${"E-mail Sent Successfully "}`)     // submit alert 
        //event.preventDefault()  // to persist form data after submit 
    }

    return (
        <div>
            <form className = "form-alert">
               
            <br/> <h1>Alerts</h1><br/>
                <div class="form-group-alert">
                    <label className='alert-labels'>To Email address</label><br/>
                <input type="email" class="alert-input"  placeholder="name@example.com"/>              
                </div>
            <br/>
                
                <div class="form-group-alert">
                    <label className='alert-labels'>Alert Message</label><br/>
                <textarea class="alert-input-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            <br/>                
                <input type = "submit" className='alert-button' onClick={handleSubmit}/> 
        </form>
\
        </div>
    )
}
export default Alert
