import React, { useState } from 'react';
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
import { Link, withRouter } from 'react-router-dom';

// import { getUsersProfiles, DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
import { useDispatch } from "react-redux";
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
    
  },
});

export default function AllOeders(props) {

 
  let a = props.orders.products.map((item, i) => {
 

    console.log(item)

    return (
      <TableRow size="large" hover={true} style={{ borderTop: "2px solid blue" }}  >
        <StyledTableCell component="th" scope="row"  >{props.index}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{props.orders.user.email}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{item.cellNo}</StyledTableCell>
        <StyledTableCell  >
          <img className="cart-images" src={"http://localhost:8080/" + item.product?.imgSrc[0]} />
          <img className="cart-images" src={"http://localhost:8080/" + item.product?.imgSrc[1]} />
          <img className="cart-images" src={"http://localhost:8080/" + item.product?.imgSrc[2]} />
          <img className="cart-images" src={"http://localhost:8080/" + item.product?.imgSrc[3]} />
        </StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{item.province}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{item.city}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{item.address}</StyledTableCell>
        <StyledTableCell  component="th" scope="row"  >{item.product.productname}</StyledTableCell>
        <StyledTableCell  component="th" scope="row"  >{item.product.category}</StyledTableCell>
        <StyledTableCell  component="th" scope="row"  >{item.quantity}</StyledTableCell>
        <StyledTableCell  component="th" scope="row"  >{item.product.price}</StyledTableCell>
        <StyledTableCell component="th" scope="row" style={{ color: "blue" }} >price*quantity={item.product.price * item.quantity}$</StyledTableCell>
        <StyledTableCell  component="th" scope="row"  >

        </StyledTableCell>

 
      </TableRow>
    )
  })
 
  return (
    <>
      {a}
    </>
  );
}

//  {/* // <StyledTableCell size="large"    component="th" scope="row"  >  {a,'\n'}</StyledTableCell> */}

//   {/* /* <StyledTableCell size="large"    component="th" scope="row"  >{props.user.cellNo}</StyledTableCell> */}
//   {/* <TableCell  >
//                 <img  className="cart-images"  src={"http://localhost:8080/" + props.user.product.imgSrc[0]} />
//                 <img className="cart-images"  src={"http://localhost:8080/" + props.user.product.imgSrc[1]} />
//                 <img className="cart-images" src={"http://localhost:8080/" + props.user.product.imgSrc[2]} />
//                 <img className="cart-images"  src={"http://localhost:8080/" + props.user.product.imgSrc[3]} />
//               </TableCell> */}
//   {/* <StyledTableCell size="large"    component="th" scope="row"  >{props.user.product.productname}</StyledTableCell> */}
//   {/* <StyledTableCell component="th" scope="row"  >{props.user.name}</StyledTableCell> */
//   /* <StyledTableCell component="th" scope="row"  >{props.user.product.category}</StyledTableCell>
//   <StyledTableCell component="th" scope="row"  >{props.user.quantity}</StyledTableCell>
//   <StyledTableCell component="th" scope="row"  >{props.user.product.price}$</StyledTableCell>
//   <StyledTableCell component="th" scope="row"  >price*quantity={props.user.product.price*props.user.quantity}$</StyledTableCell>
//   <StyledTableCell component="th" scope="row"  >{props.user.province}</StyledTableCell>
//   <StyledTableCell component="th" scope="row"  >{props.user.city}</StyledTableCell>
//   <StyledTableCell component="th" scope="row"  >{props.user.address}</StyledTableCell> */