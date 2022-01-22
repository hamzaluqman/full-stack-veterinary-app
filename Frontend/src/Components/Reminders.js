import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Reminders = () => {
     
    const [reminder,setReminder] = React.useState([]);

    useEffect(()=>{
          fetch('http://localhost:8080/reminder/')
          .then(res=>res.json())
          .then(res=> {
              setReminder(res)
              console.log(res);
          }).catch(e=> {
              console.log(e);
          })
    },[])

    const columns = [
        { id: 'animalID', label: 'Animal ID', minWidth: 20 },
        { id: 'entryDate', label: 'Entry Date', minWidth: 20 },
        { id: 'reminderDescription', label: 'Reminder', minWidth: 20 } ,
        { id: 'dueDate', label: 'Due Date', minWidth: 20 } ,
        { id: 'ucid', label: 'UCID', minWidth: 20 } ,
        {icon: 'icon',label:
        <Link to='/addreminder'> <FaIcons.FaPlusCircle size = '0.8cm'/></Link>}
        
      ];
      
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
    

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <>         
        
        <div className ="user-table">
         <br/>          
            <h1>Reminders</h1><br/>           
            <Paper sx = {{ width: '60%', overflow: 'hidden'}}>
                <TableContainer sx={{ maxHeight: 430 }}>
                    <Table stickyHeader aria-label="Table" >
                        <TableHead >
                            <TableRow>
                                {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead> 
                        
                        <TableBody>
                            {reminder
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((reminder) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={reminder.code}>
                                        {columns.map((column) => {
                                        const value = reminder[column.id];
                                        return (
                                            <TableCell key={column.animalID} align={column.align}>
                                            {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value}
                                            </TableCell>
                                        );
                                        })}
                                    </TableRow>
                                    );
                                })} 
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="user-table"
                count={reminder.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />               
            </Paper>
            
        </div>        
            
        </>
    )
}

export default Reminders
