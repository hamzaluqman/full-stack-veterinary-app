import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import './Table.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Consultation = () => {

    const [consultation,setConsultation] = React.useState([]);

    useEffect(()=>{
          fetch('http://localhost:8080/consultation')
          .then(res=>res.json())
          .then(res=> {
              setConsultation(res)
              console.log(res);
          }).catch(e=> {
              console.log(e);
          })
    },[])

    const columns = [
        { id: 'animalID', label: 'Animal ID', minWidth: 20 },
        { id: 'consultationDate', label: 'Consultation Date', minWidth: 20 },
        { id: 'diagnosis', label: 'Diagnosis', minWidth: 20 },
        { id: 'treatment', label: 'Treatment', minWidth: 20 },
        { id: 'prescription', label: 'Prescription', minWidth: 20 },
        { id: 'ucid', label: 'UCID', minWidth: 20 },
        {icon: 'icon',label:
        <Link to='/addconsultation'> <FaIcons.FaPlusCircle size = '0.8cm'/></Link>}
               
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
            <h1>Consultation</h1><br/>
            <Paper sx = {{ width: '50%', overflow: 'hidden'}}>
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
                            {consultation
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                        const value = row[column.id];
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
                count={consultation.length}
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

export default Consultation
