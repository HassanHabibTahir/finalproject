


import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

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
import Adminprofile from './adminpage/profile'
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
  
    return (
      <div>
       <Grid container > 
    
        <Grid item xs={12} >
        <Paper>
        <Divider />
        <Grid  className="marginTop" > 
         
       

          <Grid item xs={12} md={12}>
          {/* <Divider /> */}
          {/* <TableContainer component={Paper}> */}
      {/* <Table className={classes.table}  aria-label="customized table"  > */}
        
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
      {/* </Table> */}
    {/* </TableContainer> */}
       
                    <Table  style={{width:"100vw"}}   >
                

      <TableBody>
      {/* <TableRow> */}
      {copyData.length>0 ?
              copyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((ite)=>ite.typeAdmin===true)
              .map((admin,i) => 
              <Adminprofile key={i} admin={admin} index={i}  TableStyle={StyledTableCell}  />
      
              
              )
              :<img alt=""/> }
{/* </TableRow> */}
      </TableBody>
                    <TableFooter>
                      <TableRow>
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
                      </TableRow>
                    </TableFooter>


                 </Table>
          </Grid>
        </Grid>
        </Paper>
           
        </Grid>
      </Grid>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    profile: state
})

export default connect(mapStateToProps, {  getUsersProfiles})(Seller)
