import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
//Table for displaying users
const BasicTable = ({users}) => {
    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Company</TableCell>
            <TableCell >BlogPosts</TableCell>
            <TableCell >Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.company.name}</TableCell>
              <TableCell ><Link to={'/posts/' + row.id} >Go to Posts of {row.name}</Link></TableCell>
              <TableCell >{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default BasicTable;