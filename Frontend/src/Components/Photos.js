import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import './Table.css';

const Photos = () => {

    const columns = [
        { id: 'firstName', label: 'Date', minWidth: 20 },
        { id: 'lastName', label: 'Name', minWidth: 20 },
        { id: 'ucid', label: 'Comment', minWidth: 20 },
               
      ];
      
      const createData = (firstName, lastName, ucid) => {
        return { firstName, lastName, ucid};
      }
      
      const rows = [
        createData('Alex', 'Brown', 123),
        createData('Harry', 'Potter', 124),
        createData('Alex', 'Brown', 123),
        createData('Harry', 'Potter', 124),
        createData('Alex', 'Brown', 123),
        createData('Harry', 'Potter', 124),
        createData('Alex', 'Brown', 123),
        createData('Harry', 'Potter', 124),
        
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
            <h1>Photos of Animals</h1>
            <Paper sx = {{ width: '150%', overflow: 'hidden'}}>
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

export default Photos
