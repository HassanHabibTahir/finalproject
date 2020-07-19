import React, { useState } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';


import TableCell from '@material-ui/core/TableCell';


import TableRow from '@material-ui/core/TableRow';

import {  Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

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
    // minWidth: 700,
  },
});

export default function BuyetOrders(props) {
  let a = props.orders.products.map((item, i) => {
     return (
      <TableRow size="large" hover={true} style={{ borderTop: "2px solid blue" }}  >
        <StyledTableCell component="th" scope="row"  >{i}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{props.orders.user.email}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{item.cellNo}</StyledTableCell>
        <StyledTableCell  >
          <img className="cart-images" src={"http://localhost:8080/" + item.product?.imgSrc[0]} />
          <img className="cart-images" src={"http://localhost:8080/" + item.product?.imgSrc[1]} />
          <img className="cart-images" src={"http://localhost:8080/" + item.product?.imgSrc[2]} />
          <img className="cart-images" src={"http://localhost:8080/" + item.product?.imgSrc[3]} />
        </StyledTableCell>
        <StyledTableCell size="large" component="th" scope="row"  >{item.product.productname}</StyledTableCell>
        <StyledTableCell size="large" component="th" scope="row"  >{item.product.category}</StyledTableCell>
        <StyledTableCell size="large" component="th" scope="row"  >{item.quantity}</StyledTableCell>
        <StyledTableCell size="large" component="th" scope="row"  >{item.product.price}</StyledTableCell>
        <StyledTableCell component="th" scope="row" style={{ color: "blue" }} >price*quantity={item.product.price * item.quantity}$</StyledTableCell>
        <StyledTableCell size="large" component="th" scope="row"  >{item.product.user.toString()}</StyledTableCell>

        <StyledTableCell size="large" component="th" scope="row"  >

          <Button variant="outlined" color="primary" href="#outlined-buttons">

            <Link to={`/selleracount/${item.product.user}`} >GET SELLER INFORMATION</Link>
          </Button>

        </StyledTableCell>

        {/* <StyledTableCell size="large"    component="th" scope="row"  >
 </StyledTableCell> */}

      </TableRow>
    )
  })

  return (
    <>
      {a}
    </>
  );
}

