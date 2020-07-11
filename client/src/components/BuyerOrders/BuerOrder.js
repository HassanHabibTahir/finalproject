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
import {Link,withRouter} from 'react-router-dom';
// import { getUsersProfiles, DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
import { useDispatch  } from "react-redux";
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

// const [verfiy , isVarified]= useState(false)

//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const changedElement=(id)=>{
//    isVarified(!verfiy)
//    UpdatadataElemt(id)
   
//   }



//    const DeleteUser = (i, id) => {

//         console.log(i, id)
//         const data = {
//             index: i,
//             id: id
//         }

//         dispatch(DeleteUserprofile(data))

//     }


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
let x=[]
let a =props.orders.products.map((item)=>{
// console.log(item)
return(
  <TableRow >
  <StyledTableCell size="large"    component="th" scope="row"  >{item.product.productname}</StyledTableCell>
  <StyledTableCell size="large"    component="th" scope="row"  >{item.quantity}</StyledTableCell>
  <StyledTableCell size="large"    component="th" scope="row"  >{item.product.category}</StyledTableCell>
  <StyledTableCell size="large"    component="th" scope="row"  >{item.product.price}</StyledTableCell>
  <StyledTableCell size="large"    component="th" scope="row"  >{item.product.user.toString()}</StyledTableCell>
  <StyledTableCell size="large"    component="th" scope="row"  ><Link to={`/selleracount/${item.product.user}`} >GET SELLER INFORMATION</Link>
 </StyledTableCell>
  
    </TableRow>
)
})
console.log(x)
// let c = []
// let b = a.map((ite)=>{
//     return c.concat(ite)
// })
// let items 
// let b = a.map((i)=>{
//     items =i.reduce((r, e) => (r.push(...e), r), [])
// })

// console.log(items)
// let items= b.reduce((r, e) => (r.push(...e), r), [])
// console.log(items)



// "quantity" : 1,
// "product" : {
//     "imgSrc" : [ 
//         "1594347488274.3179-pngguru.com (2).png", 
//         "1594347488302.895-pngguru.com (3).png", 
//         "1594347488312.521-pngguru.com (8).png", 
//         "1594347488340.8447-pngguru.com (9).png"
//     ],
//     "_id" : ObjectId("5f07cfe06bac5037804518dd"),
//     "user" : ObjectId("5f05cfb80a49676bb4a30d60"),
//     "price" : 34,
//     "discount" : 9,
//     "productname" : "shirt",
//     "discription" : "games developmetns",
//     "category" : "WOMEN",


  return (
  // <div>{a}</div>
    // <TableContainer component={Paper}>
     <Table   size="large"  aria-label="customized table">

<TableRow   key={props.orders._id} >
<h1 style={{color:"blue"}} >{props.index}</h1>
  {/* <StyledTableCell size="large"    component="th" scope="row"  >{props.index}</StyledTableCell> */}
   <StyledTableCell size="large"    component="th" scope="row"  >{a} </StyledTableCell>   
 
  
    </TableRow>
    </Table>
    // </TableContainer>
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