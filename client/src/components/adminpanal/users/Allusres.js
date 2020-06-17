






















import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '../users/usertabel';
import TablePaginationActionsWrapped from '../pagination/pagination';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';
import { getUsersProfiles, DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});


class AllUser extends Component {
  
constructor(props) {
  super(props)
  this.state={
   ads:[],
   copyData:[],     
   page: 0,
   rowsPerPage: 1,
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

// onClickHandler = (data) =>{
  
//    const {ads} = this.state; 
//    let filter = ads.filter(item => item.category === data);
//    this.setState({copyData:filter});
// }
componentWillReceiveProps(nextProps) {
  
    // console.log(nextProps.profile.profile.users)
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
    console.log(copyData)
    return (
      <div>
       <Grid container > 
    
        <Grid item xs={12} >
        <Paper>
        <Divider />
        <Grid  className="marginTop" > 
         
       

          <Grid item xs={12} md={12}>
          {/* <Divider /> */}
          <TableContainer component={Paper}>
      <Table style={{width:"70vw"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  component="th" >Name</TableCell>
            <TableCell   component="th" >Email</TableCell>
            <TableCell   component="th" >PhoneNumber</TableCell>
            <TableCell  component="th" >Product</TableCell>
            <TableCell   component="th" >Varification</TableCell>
            <TableCell   component="th" >Delete User</TableCell>
            <TableCell   component="th" >Admin</TableCell>
           
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
          {copyData.length>0 ?
              copyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((users,i) => {
                return (


<div>
        <TableBody>
<Card key={i} user={users}  />
          
        </TableBody></div>


                );
              })
              :<img alt=""/> }
                    <Table>
                      
                    <TableFooter>
                      {/* <TableRow> */}
                        <TablePagination
                          // colSpan={2}
                          count={copyData.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          labelDisplayedRows={() => ""}
                          labelRowsPerPage=""
                          rowsPerPageOptions={[2,5, 10,25]}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      {/* </TableRow> */}
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
const mapStateToProps = (state) => ({
    profile: state
})

export default connect(mapStateToProps, { DeleteUserprofile, getUsersProfiles, updataElement })(AllUser)
















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


















































