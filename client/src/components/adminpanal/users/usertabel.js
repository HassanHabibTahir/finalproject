import React,{useState} from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
});

export default function CustomizedTables(props) {

const [verfiy , isVarified]= useState(false)

  const classes = useStyles();


  const changedElement=()=>{
   isVarified(!verfiy)
  }

console.log(props.user)
  return (
    // <TableContainer component={Paper}>
    //   <Table   size="large"  className={classes.table} aria-label="customized table">

      <TableRow   key={props.user._id} >
  <StyledTableCell size="large"    component="th" scope="row"  >{props.index}</StyledTableCell>
  <StyledTableCell size="large"    component="th" scope="row"  >{props.user.name}</StyledTableCell>
  {/* <StyledTableCell component="th" scope="row"  >{props.user.name}</StyledTableCell> */}
  <StyledTableCell component="th" scope="row"  >{props.user.email}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.cellNo}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.city}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.province}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.address}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{!props.user.userCondition?'Admin':props.user.userCondition}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >
  <Checkbox
                //  checked={verfiy==false?"checked":false}
                 onChange={changedElement} value={verfiy}

                                />
    
    </StyledTableCell>
  
  <StyledTableCell>
  <Button
                                variant="contained"
                                color="secondary"
                                // onClick={() => { this.DeleteUser(i, item._id) }}
                                startIcon={<DeleteIcon />}
                            >
                                Delete
                            </Button>

  </StyledTableCell>
  {/* onClick={() => { this.UpdatadataElemt(item._id) }} */}
   <StyledTableCell component="th" scope="row"  ><Button  color="primary" >SAVE</Button></StyledTableCell>
  
     
      </TableRow>
    //   </Table>
    // </TableContainer>
  );
}





























// import React, { Component } from 'react'

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// export default class usertabel extends Component {
//   render() {
//     let TableStyle= props.TableStyle
//     return (
     
//       <div>
//         <TableRow  key={this.props.user._id}>
           
//               <TableStyle align="right">{this.props.user.name}</TableStyle>
     
//               <TableStyle align="right">{this.props.user.email}</TableStyle>
//               <TableStyle align="right">{this.props.user.name}</TableStyle>
     
//               <TableStyle align="right">{this.props.user.email}</TableStyle>
//               <TableStyle align="right">{this.props.user.name}</TableStyle>
     
//      <TableStyle align="right">{this.props.user.email}</TableStyle>
//      <TableStyle align="right">{this.props.user.email}</TableStyle>
//               <TableStyle align="right">{this.props.user.PhoneNumber}</TableStyle>
//             </TableRow>
//        <tr>
//                            {/* <td>{this.props.user.name}</td> */}
//                          {/* <td>{item.name}</td>                         
//                           <td>{item.email}</td>
//                            <td>{item.PhoneNumber}</td>
//                            <td>{item.product}</td> */}

                     
// </tr>


//       </div>
//     )
//   }
// }


