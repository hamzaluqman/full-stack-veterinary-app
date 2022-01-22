import React , {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PendingUserSearch = () => {

    const actions = [
    
        {value: 'Delete',  label: 'Delete',},
        {value: 'Add',  label: 'Add',},
        
    ];

    const [option, setOption] = useState("");

    const handleChange = (event) => {
        setOption(event.target.value);
    };
    return (
        <>
          <div className = "user-searchbox">
            <Box component = "form" sx = {{'& > :not(style)': { m: 1, width: '23ch' }, }} >

            <TextField id = "search" label = "Please enter UCID" variant="outlined" />
            <Button id = "search-button" variant = "contained" size = "large" >Search</Button>
            </Box>
            
        
        <Box component = "form" sx = {{'& > :not(style)': { m: 1, width: '100%' }, }} >
        <Stack direction = "row" spacing = {1} textAlign = 'center'  >
        <TextField id = "first-name" label = "First Name" variant="outlined" />
        <TextField id = "last-name" label = "Last Name" variant="outlined"  />
        </Stack>
    
        <Stack direction = "row" spacing = {1}  >
        <TextField id = "email" label = "Email" variant="outlined" />
        <TextField id = "occupancy" label = "Occupancy" variant="outlined" />
        </Stack>
        </Box>
        
        <Box component = "form" sx = {{'& > :not(style)': { m: 1, width: '47%' }, }} >
        <TextField id="outlined-select-action" select label="Action" value={option}
            onChange={handleChange} helperText="Please select an action"
        > 
        {actions.map((option) => (
            <MenuItem key={option.value} value = {option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button id = "confirm-button" variant = "contained" size = "large" color ="secondary" >Confirm</Button>
        </Box>
            
        </div>
        
        </>
       
    )
}

export default PendingUserSearch
