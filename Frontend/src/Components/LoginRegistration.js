import React, {useState} from 'react';
import image from './UCalgary.svg';
import imageVet from './vetpic.jpg';
import {Link} from 'react-router-dom';

const LoginRegistration = () => {

    const [ucid, setUCID] = useState(""); 
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [occupancy,setOccupancy]=useState("");
    const [status,setStatus]=useState("Pending");
    const [password,setPassword] = useState("");

    const [loginUcid, setLoginUCID] = useState(""); 
    const [loginPassword,setLoginPassword] = useState("");

    


    function loginUser(e)
    {
        // try{

            e.preventDefault()

            const login = {ucid : loginUcid, userPassword : loginPassword}
            console.warn("item",login)

            fetch(`http://localhost:8080/user/login?UCID=${ucid}&password=${password}`, {
                method: 'GET',
                headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
                },
                // body:JSON.stringify(login)
            })
        // } catch (error) {
        //     this.setState({ error });
        //     // log error or send to log aggregation tool
        //     alert(`${"Values submitted"}`)     // submit alert
        // }
    }


    function registerUser(e)
    {

        e.preventDefault()

        const user = {ucid : ucid, fname : fname, lname : lname, email : email, 
            occupancy : occupancy, userStatus : status, userPassword : password}
        console.warn("item",user)

        fetch(`http://localhost:8080/user/`, {
            method: 'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
          })

    }


    return (
        <>
        <header>
            <div className = "header"> 
            {/* <img src = {image} width ="100" height ="50" alt="UCalgary logo"/> */}
            <h2> FACULTY OF VETERINARY MEDICINE 
            <img src = {image} width ="100" height ="50" alt="UCalgary logo"/>
            </h2>
            </div>

        </header>

        <section className = "vet-picture">
            <img src = {imageVet} width ="100" height ="50" alt="vet pic" />
        </section>

        <form>
            <div className = "login-form">
                <h3> Login </h3>
                <div className = "login-group"> 
                    <label type = "ucid"> UCID: </label>
                    <input type = "text" name="ucid" id="ucid" value={loginUcid} onChange={(e)=>{setLoginUCID(e.target.value)}}></input>
                </div>
                <div className = "login-group"> 
                    <label type = "password"> Password: </label>
                    <input type = "password" name="password" id="password" value={loginPassword} onChange={(e)=>{setLoginPassword(e.target.value)}}></input>
                </div>
                <Link to ="/users"> <input type="submit" value="LOGIN" /> </Link>
            </div>

            <div className = "registration-form">
                <h3> Registration </h3>
                <div className = "registration-group"> 
                    <label htmlFor = "email"> Email: </label>
                    <input type = "text" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>

                <div className = "firstName"> 
                    <label htmlFor = "firstName"> First Name: </label>
                    <input type = "text" name="firstName" id="firstName" value={fname} onChange={(e)=>{setFName(e.target.value)}}></input>
                </div>

                <div className = "lastName"> 
                    <label htmlFor = "lastName"> Last Name: </label>
                    <input type = "text" name="lastName" id="lastName" value={lname} onChange={(e)=>{setLName(e.target.value)}}></input>
                </div>

                <div className = "ucid"> 
                    <label htmlFor = "ucid"> UCID: </label>
                    <input type = "text" name="ucid" id="ucid" value={ucid} onChange={(e)=>{setUCID(e.target.value)}}></input>
                </div>
                
                <div className = "password"> 
                    <label htmlFor = "password"> Password: </label>
                    <input type = "password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>


                <div className = "occuopancy"> 
                    <label htmlFor = "occupancy"> Occupancy: </label>
                    <input type = "text" name="occupancy" id="occupancy" value={occupancy} onChange={(e)=>{setOccupancy(e.target.value)}}></input>
                </div>

                <input type="submit" value="REGISTER" onClick={registerUser}/>
            </div>            
            
        </form>
        </>
    )
}

export default LoginRegistration