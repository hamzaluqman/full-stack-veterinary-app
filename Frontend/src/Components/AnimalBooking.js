import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import './Table.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import AnimalProfile from './AnimalProfile';

const Comments = () => {

    const columns = [
        { id: 'firstName', label: 'Date Booked', minWidth: 20 },
        { id: 'lastName', label: 'Date Return', minWidth: 20 },
        { id: 'ucid', label: 'Booker Name', minWidth: 20 },
        { id: 'id', label: 'Type', minWidth: 20 },
        {icon: 'icon',label:
        <Link to='/addanimalbooking'> <FaIcons.FaPlusCircle size = '0.8cm'/></Link>}
               
      ];
      
      const createData = (firstName, lastName, ucid,id) => {
        return { firstName, lastName, ucid,id};
      }
      
      const rows = [
        createData('Alex', 'Brown', 123,'Dog'),
        createData('Harry', 'Potter', 124,'Horse'),
        createData('Alex', 'Brown', 123,'Dog'),
        createData('Harry', 'Potter', 124,'Horse'),
        createData('Alex', 'Brown', 123,'Dog'),
        createData('Harry', 'Potter', 124,'Cat'),
        createData('Alex', 'Brown', 123,'Dog'),
        createData('Harry', 'Potter', 124,'Cat'),
        
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
            <h1>Animal Booking </h1><br/>
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
                            {rows
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
                count={rows.length}
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
