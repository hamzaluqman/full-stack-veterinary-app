// import React from 'react'
// import TopBanner from './TopBanner'
// import './AddComments.css'
// import { Link } from 'react-router-dom';

// export default function AddComments() {
//     return (
//         <div>   
//             <TopBanner />         
//             <form>
                
//               <div class="form-add-comments">
//                 <label class = "labels-form-title">Add Comments</label>
//                 <br/><br/> <br/>
                
//                 <label class = "labels-form-comment">Date</label>
//                 <br/><input type="date" class="input-form-comment" />
//                 <br/> 

//                 <label class = "labels-form-comment">Name</label>
//                 <br/><input type = "type" class="input-form-comment" />                
//                 <br/>

//                 <label class = "labels-form-comment">Comments</label>
//                 <br/><input type="text" class="input-form-comment"  />
//                 <br/>

//                 <br/>
//                 <button type="submit" class="form-button-comment">Submit</button>
//                 <Link to='/comments'><button type="submit" class="form-button-comment">Cancel</button> </Link>
                
//              </div>  
             
//             </form>
//         </div>
//     )
// }

import React, { Component } from 'react'
import TopBanner from './TopBanner'
import './AddComments.css'
import AddCommentsService from '../Service/CommentsService'
import { Link } from 'react-router-dom';

export default class AddComments extends Component {

    constructor(props){
        super(props)
        // These are DB columns
        this.state = {    
            animalid : '',
            entrydate: '',
            comment : '',
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

    handleEntryDateChange = (e) =>{
        this.setState({
            entrydate: e.target.value
            })
    }

    handleCommentsChange = (e) =>{
        this.setState({
            comment: e.target.value
            })
    }

    handleUCIDChange = (e) =>{
        this.setState({
            ucid: e.target.value
            })
    }

    handleSubmit = (e) =>{
         alert(`${"Values submitted"}`)     // submit alert 
        //e.preventDefault()  // to persist form data after submit 
        
        const comments = {animalID : this.state.animalid, entryDate : this.state.entrydate, 
            comment : this.state.comment,  ucid : this.state.ucid};

        console.log(comments);// JSON.stringify(booking));
        AddCommentsService.createComment(comments);

    }

    render() {

        return (
            <div>   
                <TopBanner />         
                <form>
                    
                  <div className="form-add-comments">
                    <label className = "labels-form-title">Add Comments</label>
                    <br/><br/> <br/>

                    <label className = "labels-form-comment">Animal ID</label>
                    <br/><input type = "type" className="input-form-comment" value = {this.state.animalid} onChange={this.handleAnimalIDChange}/>                
                    <br/>
                    
                    <label className = "labels-form-comment">Entry Date</label>
                    <br/><input type="date" className="input-form-comment" value={this.state.entrydate} onChange={this.handleEntryDateChange}/>
                    <br/> 
    
                    <label className = "labels-form-comment">Comments</label>
                    <br/><input type="text" className="input-form-comment" value = {this.state.comment} onChange={this.handleCommentsChange} />
                    <br/>

                    <label className = "labels-form">UCID</label>
                    <br/><input type="text" className ="input-form" value={this.state.ucid} onChange={this.handleUCIDChange}/>
                    <br/> 
    
                    <br/>
                    <button type="submit" className="form-button-comment" onClick={this.handleSubmit} >Submit</button>
                    <Link to='/comments'><button type="submit" className="form-button-comment">Cancel</button> </Link>
                    
                 </div>  
                 
                </form>
            </div>
        )

    }
    
}