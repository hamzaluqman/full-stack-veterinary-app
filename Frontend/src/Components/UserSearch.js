import React , {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const UserSearch = () => {

//  const [users, setUser] = useState([])
  const [ucid, setUCID] = useState(null); 
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [occupancy,setOccupancy]=useState("");
  const [status,setStatus] = useState("");
  const [password,setPassword] = useState("");
    const actions = [
        { value: 'Add', label: 'Add',},
        {value: 'Delete',  label: 'Delete',}        
        
    ];

    const [option, setOption] = useState("");

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    function updateUser()
    {

      const user = {ucid : ucid, fname : fname, lname : lname, email : email, 
        occupancy : occupancy, userStatus : status, userPassword : password}
      console.warn("item",user)

      fetch(`http://localhost:8080/user/profile`, {
        method: 'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      })

    }

    return (
        <>

        <div className = "user-searchbox">
            <Box component = "form" sx = {{'& > :not(style)': { m: 1, width: '23ch' }, }} >

            <TextField id = "search" label = "Please enter UCID" variant="outlined" 
              value={ucid} onChange={(e)=>{setUCID(e.target.value)}} />
            </Box>
            
        
        <Box component = "form" sx = {{'& > :not(style)': { m: 1, width: '100%' }, }} >
        <Stack direction = "row" spacing = {1} textAlign = 'center'  >
        
        <TextField id = "first-name" label = "First Name" variant="outlined" 
        value={fname} onChange={(e)=>{setFName(e.target.value)}} />
        
        <TextField id = "last-name" label = "Last Name" variant="outlined"  
        value={lname} onChange={(e)=>{setLName(e.target.value)}} />
        </Stack>
    
        <Stack direction = "row" spacing = {1}  >
        <TextField id = "email" label = "Email" variant="outlined" 
        value={email} onChange={(e)=>{setEmail(e.target.value)}} />

        <TextField id = "occupancy" label = "Occupancy" variant="outlined" 
        value={occupancy} onChange={(e)=>{setOccupancy(e.target.value)}} />

        </Stack>
        </Box>
        
        <Box component = "form" sx = {{'& > :not(style)': { m: 2, width: '47%' }, }} >
        <TextField id = "status" label = "Status" variant="outlined" 
        value={status} onChange={(e)=>{setStatus(e.target.value)}} >

        {/* <TextField id="outlined-select-action" select label="Action" value={option}
            onChange={handleChange} helperText="Please select an action"
        >  */}
        {actions.map((option) => (
            <MenuItem key={option.value} value = {option.value}  >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button id = "confirm-button" variant = "contained" size = "large" color ="secondary" onClick={updateUser} >Edit</Button>
        {/* <Button id = "confirm-button" variant = "contained" size = "large" color ="secondary" onClick={updateUser} >Delete</Button> */}
        </Box>
            
        </div>

        </>
    )
}

export default UserSearch
