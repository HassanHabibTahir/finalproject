import React,{useState} from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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

  // const changedElement=(id)=>{
  //  isVarified(!verfiy)
  //  UpdatadataElemt(id)
   
  // }



  //  const DeleteUser = (i, id) => {

  //       console.log(i, id)
  //       const data = {
  //           index: i,
  //           id: id
  //       }

  //       dispatch(DeleteUserprofile(data))

  //   }


// const UpdatadataElemt = (id) => {
// // console.log(id)
//         const updatation = {
//             id: id,
//             isVarified: verfiy
//         }

//         dispatch(updataElement(updatation))
//     }
// console.log(verfiy)
// console.log(props.user)

  return (
    // <TableContainer component={Paper}>
    //   <Table   size="large"  className={classes.table} aria-label="customized table">

    <TableRow   key={props.user._id} >
  <StyledTableCell size="large"    component="th" scope="row"  >{props.index}</StyledTableCell>
  <StyledTableCell size="large"    component="th" scope="row"  >{props.user.email}</StyledTableCell>
  <StyledTableCell size="large"    component="th" scope="row"  >{props.user.cellNo}</StyledTableCell>
  <TableCell  >
                <img  className="cart-images"  src={"http://localhost:8080/" + props.user.product.imgSrc[0]} />
                <img className="cart-images"  src={"http://localhost:8080/" + props.user.product.imgSrc[1]} />
                <img className="cart-images" src={"http://localhost:8080/" + props.user.product.imgSrc[2]} />
                <img className="cart-images"  src={"http://localhost:8080/" + props.user.product.imgSrc[3]} />
              </TableCell>
  <StyledTableCell size="large"    component="th" scope="row"  >{props.user.product.productname}</StyledTableCell>
  {/* <StyledTableCell component="th" scope="row"  >{props.user.name}</StyledTableCell> */}
  <StyledTableCell component="th" scope="row"  >{props.user.product.category}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.quantity}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.product.price}$</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >price*quantity={props.user.product.price*props.user.quantity}$</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.province}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.city}</StyledTableCell>
  <StyledTableCell component="th" scope="row"  >{props.user.address}</StyledTableCell>
  
      </TableRow>
    //   </Table>
    // </TableContainer>
  );
}

