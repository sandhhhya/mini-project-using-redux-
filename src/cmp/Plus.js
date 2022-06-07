import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableRow, TableHead, Paper , Button } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Plus = () => {

    const [rows, setRows] = useState('');
    useEffect(() => {
        const hel = async () => {
            const a = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Authors');
            console.log(a);
            setRows(a.data);
        }
        hel();
    }, []);

const deletefunction = async ( id ) => {  
    // alert(id);
    const a=await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${id}`);
    console.log("succcssfully deleted ok ");
    console.log(a);
}


    return (
        <div  style={{ Width: "500px"}}>
            <TableContainer    component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow> 
                        <TableCell align="right"> Action </TableCell> 
                        <TableCell align="right"> Id Book </TableCell> 
                            <TableCell align="right"> First Name</TableCell>
                            <TableCell align="right">Last Name  </TableCell>
                            {/* <TableCell align="right">Username </TableCell>  */}
                         <Link to='/post'>  <TableCell align="right"><Button variant='contained' color='primary'> Add + </Button> </TableCell>  </Link> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows && rows.map((row) => (
                            <TableRow
                                key={row.idBook}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            > 
                              <TableCell align="right"> <Button variant='contained' color='primary' onClick={ () => deletefunction(`${row.id}`)}> Delete </Button></TableCell> 
                              <TableCell align="right">{row.id}</TableCell> 
                                <TableCell align="right">{row.firstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                {/* <TableCell align="right">{row.username}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Plus;
