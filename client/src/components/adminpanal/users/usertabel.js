import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
export default class usertabel extends Component {
  render() {
    return (
      <div>
        <TableRow   style={{width:"70vw"}}  key={this.props.user._id}>
              <TableCell component="th" scope="row">
      
              </TableCell>
              <TableCell align="right">{this.props.user.name}</TableCell>
     
              <TableCell align="right">{this.props.user.email}</TableCell>
              <TableCell align="right">{this.props.user.PhoneNumber}</TableCell>
            </TableRow>
       <tr>
                           {/* <td>{this.props.user.name}</td> */}
                         {/* <td>{item.name}</td>                         
                          <td>{item.email}</td>
                           <td>{item.PhoneNumber}</td>
                           <td>{item.product}</td> */}

                     
</tr>


      </div>
    )
  }
}
