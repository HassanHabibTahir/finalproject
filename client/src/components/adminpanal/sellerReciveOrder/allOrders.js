import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';

// import { getUsersProfiles, DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
import { useDispatch } from "react-redux";
const BURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
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

 
  let alldata = props.orders.products.map((item, i) => {
 

    console.log(item)

    return (
      <TableRow size="large" hover={true} style={{ borderTop: "2px solid blue" }}  >
        <StyledTableCell component="th" scope="row"  >{props.index}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{props.orders.user.email}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{item.cellNo}</StyledTableCell>
        <StyledTableCell  >
          <img className="cart-images" src={`${BURL}/`+ item.product?.imgSrc[0]} />
          <img className="cart-images" src={`${BURL}/`+ item.product?.imgSrc[1]} />
          <img className="cart-images" src={`${BURL}/`+item.product?.imgSrc[2]} />
          <img className="cart-images" src={`${BURL}/`+item.product?.imgSrc[3]} />
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
      {alldata}
    </>
  );
}
