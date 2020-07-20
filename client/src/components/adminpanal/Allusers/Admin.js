


import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import Divider from '@material-ui/core/Divider';

import TablePaginationActionsWrapped from '../pagination/pagination';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Adminprofile from './adminpage/profile'
// import Spiner from '../../spnier/spiner'
import { getUsersProfiles} from '../../../store/action/adminActions/users/Allusers';
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
class Admin extends Component {
  
constructor(props) {
  super(props)
  this.state={
  
   copyData:[],     
   page: 0,
   rowsPerPage: 8,
  }
}


componentDidMount() {
  document.title = "Admin";
  this.props.getUsersProfiles();

}


componentWillReceiveProps(nextProps) {
  
  this.setState({copyData:nextProps.profile.profile.users})
}
handleChangePage = (event, page) => {
  this.setState({page});
};

handleChangeRowsPerPage = event => {
  this.setState({rowsPerPage: event.target.value});
};
  render() {
    const classes = useStyles;
    const {copyData, rowsPerPage, page} = this.state;
  
    return (
      <div>
       <Grid container > 
    
        <Grid item xs={12} >
        <Paper>
        <Divider />
        <Grid  className="marginTop" > 
         
       

          <Grid item xs={12} md={12}>
            <Table  style={{width:"100vw"}}   >     
 <TableBody>
  
      {copyData.length>0 ?
              copyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((ite)=>ite.typeAdmin===true)
              .map((admin,i) => 
              <Adminprofile key={i} admin={admin} index={i}  TableStyle={StyledTableCell}  />
      
              
              )
              :<h1 style={{textAlign:"center",alignItems:"center",color:"blue"}} >EMPTY</h1>}
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
      </Grid>
      </div>
    )
  }
}


Admin.propTypes ={
  profile:PropTypes.object.isRequired,
  getUsersProfiles:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    profile: state
})

export default connect(mapStateToProps, {  getUsersProfiles})(Admin)
