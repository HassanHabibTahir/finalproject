import React, { useState } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Maps from '../map/map'
import TableRow from '@material-ui/core/TableRow';
import { Checkbox, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {VerifyProduct ,DeleteSellerProduct} from '../../../store/action/cartAction/cartaction';
import { useDispatch } from "react-redux";
// import Spiner from '../../spnier/spiner'
// import Modal from '../Model/Model'
// import {  Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './product.css'
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);


function SellerTable(props) {

  const [verfiy, isVarified] = useState(false)
  const [showMap, setShowMap] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  // const changedElement = (id, product) => {
  //   isVarified(!verfiy)
  //   UpdatadataElemt(id,product)
  // }
  const UpdatadataElemt = (id,isVerify) => {
   
    const updatation = {
      id: id,
      isVarified: !isVerify
    }
    dispatch(VerifyProduct(updatation))
  }


 





  const DeleteProduct = (id) => {

    const data = {
      id:id
    }
   console.log(data)

    dispatch(DeleteSellerProduct(data))

  }

  return (
    // <TableContainer component={Paper}>
    //   <Table   size="large"  className={classes.table} aria-label="customized table">
    <React.Fragment>


{showMap ? <Modal/>

//           <TableRow>
            
//             <div className="map_toolbar"  style={{width:"100%",
        
//           height:"300px" ,textAlign:"center",alignItems:"center", justifyContent:"center"}}>
// <h1>{props.user.name}</h1>

// <button onClick={()=>{setShowMap(false)}} >closexczxcvcxvzxcvzxvxcv</button>
//           </div>
//           </TableRow>
          : null
        }




{/* category: "CHILD"
discount: 3
discription: "very good product"
imgSrc: (4) ["1596028519175.5735-image-cache-catalog-rocking-dudes-for-kids1-1-300x370-500x500.jpg", "1596028519178.446-images (3).jpg", "1596028519180.0781-images (1).jpg", "1596028519182.0886-images (2).jpg"]
price: 34
productVerified: true
productname: "shirt"
user: "5f1d6d1f084d74514c249401"
__v: 0
_id: "5f217667cd762228949c0e09"
 */}



    <TableRow key={props.Products._id} >
      <StyledTableCell size="large" component="th" scope="row"  >{props.index}</StyledTableCell>
   
      <StyledTableCell style={{width:"50vw"}} >
          <img className="cart-product-images" src={`${BURL}/`+ props.Products?.imgSrc[0]} />
          <img className="cart-product-images" src={`${BURL}/`+ props.Products?.imgSrc[1]} />
          <img className="cart-product-images" src={`${BURL}/`+props.Products?.imgSrc[2]} />
          <img className="cart-product-images" src={`${BURL}/`+props.Products?.imgSrc[3]} />
        </StyledTableCell>
      <StyledTableCell size="large" component="th" scope="row"  >{props.Products.category}</StyledTableCell> 
     <StyledTableCell component="th" scope="row"  >{props.Products.productname}</StyledTableCell>
    <StyledTableCell component="th" scope="row"  >{props.Products.discount}</StyledTableCell>
        <StyledTableCell component="th" scope="row"  >{props.Products.price}</StyledTableCell>
     {/*  <StyledTableCell component="th" scope="row"  >{props.user.city}</StyledTableCell>
      <StyledTableCell component="th" scope="row"  >{props.user.province}</StyledTableCell>
      <StyledTableCell component="th" scope="row"  >{props.user.address}</StyledTableCell>
      <StyledTableCell component="th" scope="row"  >{!props.user.userCondition ? 'Admin' : props.user.userCondition}</StyledTableCell> */}
   <StyledTableCell component="th" scope="row"  >
        <Checkbox
          checked={props.Products?.productVerified === true ? "checked" : false}
          onChange={() => { UpdatadataElemt(props.Products._id,props.Products?.productVerified) }} 

        />

      </StyledTableCell>
      {/* <StyledTableCell component="th" scope="row"  >
         <Button
              variant="contained"
              color="secondary"
         onClick={()=>{this.ProducSave(props.Products._id)}} >DELETE</Button>

      </StyledTableCell> */}

      <StyledTableCell>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => { DeleteProduct(props.Products._id) }}
          startIcon={<DeleteIcon />}
        >
          Delete
                            </Button>

      </StyledTableCell>
      {/* <StyledTableCell> {!props.user.isVarified == true ? "user not verified" : "user verified  by admin"}</StyledTableCell> */}
      {/* <StyledTableCell component="th" scope="row"  ><Button onClick={() => {UpdatadataElemt(props.user._id) }} color="primary" >SAVE</Button></StyledTableCell> */}
      {/* <StyledTableCell>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="secondary"
      
        >
         ON MAP
                    </Button>

      </StyledTableCell> */}


    </TableRow>
    <div>
   
    </div>


    </React.Fragment>
    
 
  );
}


export default SellerTable


























