import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import './AnimalTable.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Comments = () => {

    const [animal,setAnimal] = React.useState([]);

    useEffect(()=>{
          fetch('http://localhost:8080/animal/available-animals')
          .then(res=>res.json())
          .then(res=> {
             setAnimal(res)
              console.log(res);
          }).catch(e=> {
              console.log(e);
          })
    },[])

    const columns = [
        { id: 'animalID', label: 'Animal ID', minWidth: 20 },
        { id: 'name', label: 'Name', minWidth: 20 },
        { id: 'weight', label: 'Weight', minWidth: 20 },
        { id: 'tattooNum', label: 'Tatto Number', minWidth: 20 },
        { id: 'birthDate', label: 'Birth Date', minWidth: 20 },                
        { id: 'animalType', label: 'Animal Type', minWidth: 20 },
        { id: 'animalStatus', label: 'Animal Status', minWidth: 20 },                
        { id: 'availability', label: 'Availability', minWidth: 20 },                
        { id: 'breed', label: 'Breed', minWidth: 20 },                
        { id: 'sex', label: 'Sex', minWidth: 20 },                
        { id: 'coatColor', label: 'Coat Color', minWidth: 20 },                
        { id: 'rfid', label: 'RFID', minWidth: 20 },
        {icon: 'icon',label:
        <Link to='/addnewanimal'> <FaIcons.FaPlusCircle size = '0.8cm'/></Link>},
        {icon: 'icon',label:
        <Link to='/editanimal'> <FaIcons.FaEdit size = '0.8cm'/></Link>}                                                
       
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
        
        <div className ="animal-table">
            <br/>
            <h1>Animal Profile</h1><br/>
            <Paper sx = {{ width: '100%', overflow: 'hidden'}}>
                <TableContainer sx={{ maxHeight: 600 }}>
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
                            {animal
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((animal) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={animal.code}>
                                        {columns.map((column) => {
                                        const value = animal[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
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
                count={animal.length}
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

export default Comments
