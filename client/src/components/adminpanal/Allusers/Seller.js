


import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from './sellertabel';
import TablePaginationActionsWrapped from '../pagination/pagination';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spiner from '../../spnier/spiner'
import { getUsersProfiles, DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
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
class Seller extends Component {
  
constructor(props) {
  super(props)
  this.state={
   ads:[],
   copyData:[],     
   page: 0,
   rowsPerPage: 8,
   adsViewOf:true
  }
}


componentDidMount() {
  document.title = "Admin";
  this.props.getUsersProfiles();

}

adsViewOff = () => {
  this.setState({adsViewOf:false});
}

componentWillReceiveProps(nextProps) {
  this.setState({ads:nextProps.ads,copyData:nextProps.profile.profile.users})
}
handleChangePage = (event, page) => {
  this.setState({page});
};

handleChangeRowsPerPage = event => {
  this.setState({rowsPerPage: event.target.value});
};
  render() {
    const classes = useStyles;
    const {copyData, rowsPerPage, page,adsViewOf} = this.state;
  
    return (
      <div>
       <Grid container > 
    
        <Grid item xs={12} >
        <Paper>
        <Divider />
        <Grid  className="marginTop" > 
         
       

          <Grid item xs={12} md={12}>
                    <Table  style={{width:"100vw"}}   >
                    <TableHead>
          <TableRow >
          <StyledTableCell   component="th" >SR.NO</StyledTableCell>
            <StyledTableCell   component="th" >Name</StyledTableCell>
            <StyledTableCell   component="th" >Email</StyledTableCell>
            <StyledTableCell   component="th" >PhoneNumber</StyledTableCell>
            <StyledTableCell   component="th" >city</StyledTableCell>
            <StyledTableCell   component="th" >Province</StyledTableCell>
            <StyledTableCell   component="th" >Adress</StyledTableCell>
            <StyledTableCell   component="th" >user Type</StyledTableCell>
            <StyledTableCell   component="th" >Verification</StyledTableCell>
            <StyledTableCell   component="th" >Delete User</StyledTableCell>
            <StyledTableCell   component="th" >verification by Admin</StyledTableCell>
           
          </TableRow>
      </TableHead>


      <TableBody>
      {copyData.length>0 ?
              copyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((ite)=>ite.userCondition=='seller')
              .map((users,i) => <Card key={i} user={users} index={i}  TableStyle={StyledTableCell} />
              
              )
              :<h1 style={{textAlign:"center",alignItems:"center",color:"blue"}} >Empty</h1>}
      </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          count={copyData.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          labelDisplayedRows={() => ""}
                          labelRowsPerPage=""
                          rowsPerPageOptions={[2,5, 10,25]}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>


                 </Table>
          </Grid>
        </Grid>
        </Paper>
           
        </Grid>
        {/* <Hidden smDown>
        <Grid item xs={1} md={2}>
        {adsViewOf ? 
              <img  alt=""/>
              :""}
        </Grid>
        </Hidden> */}
      </Grid>
      </div>
    )
  }
}

Seller.propTypes={
  profile:PropTypes.object.isRequired,
  DeleteUserprofile:PropTypes.func.isRequired  ,
  getUsersProfiles:PropTypes.func.isRequired ,
  updataElement:PropTypes.func.isRequired 
}
const mapStateToProps = (state) => ({
    profile: state
})

export default connect(mapStateToProps, { DeleteUserprofile, getUsersProfiles, updataElement })(Seller)
















// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { getUsersProfiles, DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
// import './users.css'
// import { Checkbox, Button } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';

// class AllUser extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             typeAdmin: null,
//             isVarified: false,
//             array: []

//         }



//     }
//     componentDidMount() {
//         this.props.getUsersProfiles();

//     }




//     changedElement = (e, i) => {
//         //    console.log(e.target.value)
//         if (e.target) {

//             if (e.target.checked) {

//                 this.setState({
//                     isVarified: true
//                 })

//             } else {
//                 this.setState({
//                     isVarified: false
//                 })
//             }


//         }


//     }

//     UpdatadataElemt = (id) => {

//         const updatation = {
//             id: id,
//             isVarified: this.state.isVarified
//         }

//         this.props.updataElement(updatation)
//     }


//     DeleteUser = (i, id) => {

//         console.log(i, id)
//         const data = {
//             index: i,
//             id: id
//         }

//         this.props.DeleteUserprofile(data)

//     }


//     render() {


//         // console.log(this.props.profile.users)    
//         // this.props.profile.users.map((i)=>{
//         //     console.log("this is users",i)
//         //  })
//         const { profile, loading } = this.props.profile;

//         console.log("users", profile.users)
//         // console.log(profile,loading)
//         let profileItems;
//         if (profile.users === null || loading) {
//             profileItems = <h1>loading.............</h1>;
//         }
//         else {
//             if (profile.users === undefined) {
//                 profileItems = <h1>loading...........agin..</h1>;
//             }
//             else {


//                 console.log(profile.users)




//                 profileItems = profile.users.map((item, i) => {
//                     console.log(item)



//                     // // console.log(item)

//                     return (

//                         <tr key={item._id}>
//                             <td>{i}</td>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.PhoneNumber}</td>
//                             <td>{item.product}</td>

//                             <td>

//                                 <Checkbox
//                                     //    checked={this.state.isVarified==false?"checked":false}
//                                     onChange={this.changedElement} value={this.state.isVarified}

//                                 />
//                             </td>
//                             <td>   <Button
//                                 variant="contained"
//                                 color="secondary"
//                                 onClick={() => { this.DeleteUser(i, item._id) }}
//                                 startIcon={<DeleteIcon />}
//                             >
//                                 Delete
//                             </Button></td>
//                             <td><Button onClick={() => { this.UpdatadataElemt(item._id) }} color="primary" >SAVE</Button></td>
//                         </tr>



//                     )
//                 })
//             }

//             //   profileItems= profile.map((i,item)=>{
//             //   return <h1>{item.name}</h1>
//             //   })

//         }


//         return (

//             <div style={{ marginTop: '10vh' }}>
//                 <table style={{width:"200%"}} >
//                     <tr>
//                         <th>Sr.NO</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone number</th>
//                         <th>Product</th>
//                         <th>Varification</th>
//                         <th>Delete User</th>
//                         <th>Admin</th>
//                     </tr>
//                     {profileItems}
//                 </table>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     profile: state
// })

// export default connect(mapStateToProps, { DeleteUserprofile, getUsersProfiles, updataElement })(AllUser)


















































