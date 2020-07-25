import React, { useState } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Maps from '../map/map'
import TableRow from '@material-ui/core/TableRow';
import { Checkbox, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
import { useDispatch } from "react-redux";
// import Spiner from '../../spnier/spiner'
// import Modal from '../Model/Model'
// import {  Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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

  const openMapHandler = () => setShowMap(!showMap);

  const closeMapHandler = () => setShowMap(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changedElement = (id) => {
    isVarified(!verfiy)
    UpdatadataElemt(id)

  }



  const DeleteUser = (i, id) => {

    console.log(i, id)
    const data = {
      index: i,
      id: id
    }

    dispatch(DeleteUserprofile(data))

  }


  const UpdatadataElemt = (id) => {
    // console.log(id)
    const updatation = {
      id: id,
      isVarified: verfiy
    }

    dispatch(updataElement(updatation))
  }
  // console.log(verfiy)
  // console.log(props.user)
console.log(props.user)
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

    <TableRow key={props.user._id} >
      <StyledTableCell size="large" component="th" scope="row"  >{props.index}</StyledTableCell>
      <StyledTableCell size="large" component="th" scope="row"  >{props.user.name}</StyledTableCell>
      {/* <StyledTableCell component="th" scope="row"  >{props.user.name}</StyledTableCell> */}
      <StyledTableCell component="th" scope="row"  >{props.user.email}</StyledTableCell>
      <StyledTableCell component="th" scope="row"  >{props.user.cellNo}</StyledTableCell>
      <StyledTableCell component="th" scope="row"  >{props.user.city}</StyledTableCell>
      <StyledTableCell component="th" scope="row"  >{props.user.province}</StyledTableCell>
      <StyledTableCell component="th" scope="row"  >{props.user.address}</StyledTableCell>
      <StyledTableCell component="th" scope="row"  >{!props.user.userCondition ? 'Admin' : props.user.userCondition}</StyledTableCell>
      {props.user.userCondition === "seller" ? <StyledTableCell component="th" scope="row"  >
        <Checkbox
          checked={props.user?.isVarified === true ? "checked" : false}
          onChange={() => { changedElement(props.user._id) }} value={verfiy}

        />

      </StyledTableCell> : null}

      <StyledTableCell>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => { DeleteUser(props.index, props.user._id) }}
          startIcon={<DeleteIcon />}
        >
          Delete
                            </Button>

      </StyledTableCell>
      <StyledTableCell> {!props.user.isVarified == true ? "user not verified" : "user verified  by admin"}</StyledTableCell>
      {/* <StyledTableCell component="th" scope="row"  ><Button onClick={() => {UpdatadataElemt(props.user._id) }} color="primary" >SAVE</Button></StyledTableCell> */}
      <StyledTableCell>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="secondary"
      
        >
         ON MAP
                    </Button>

      </StyledTableCell>


    </TableRow>

    {/* onClick={handleOpen} */}
    <div>
      {/* <button type="button" >
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div id="transition-modal-title"><Maps/></div>
      <p id="transition-modal-description">{props.user.name}</p>
          </div>
        </Fade>
      </Modal>
    </div>


    </React.Fragment>
    
 
  );
}


export default SellerTable


























