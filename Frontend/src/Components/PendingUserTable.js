import React,{useState,useEffect} from 'react';
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



const UserTable = () => {

    const [user,setUser] = React.useState([]);

    useEffect(()=>{
          fetch('http://localhost:8080/user/pending')
          .then(res=>res.json())
          .then(res=> {
              setUser(res)
              console.log(res);
          }).catch(e=> {
              console.log(e);
          })
    },[])


    const columns = [
        { id: 'ucid', label: 'UCID', minWidth: 20 },
        { id: 'lname', label: 'Last Name', minWidth: 20 },
        { id: 'fname', label: 'First Name', minWidth: 20 },
        { id: 'email', label: 'Email', minWidth: 20 },
        { id: 'occupancy', label: 'Occupancy', minWidth: 20 },
        { id: 'userStatus', label: 'Status', minWidth: 20 }
        
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
            
            <Paper sx = {{ m: 0,  border: 1,  width: '50%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 600 }}>
                    <Table stickyHeader aria-label="Table" >
                        <TableHead>
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
                            {user
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((user) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={user.code}>
                                        {columns.map((column) => {
                                        const value = user[column.id];
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
                count={user.length}
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

export default UserTable
