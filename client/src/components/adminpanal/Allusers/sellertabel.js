import React, { useState } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';

import { Checkbox, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
import { useDispatch } from "react-redux";
import Spiner from '../../spnier/spiner'
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

function SellerTable(props) {

  const [verfiy, isVarified] = useState(false)

  const classes = useStyles();
  const dispatch = useDispatch();

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

  return (
    // <TableContainer component={Paper}>
    //   <Table   size="large"  className={classes.table} aria-label="customized table">

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


    </TableRow>
    //   </Table>
    // </TableContainer>
  );
}


export default SellerTable


























