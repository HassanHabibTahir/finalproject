import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Divider from '@material-ui/core/Divider';
import Orders from './Orders';
import TablePaginationActionsWrapped from '../pagination/pagination';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withRouter} from 'react-router-dom';
import {GetBuyerOrder} from "../../../store/action/cartAction/cartaction"
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

class Order extends Component {
    constructor(props) {
        super(props)
        this.state={
         ads:[],
         data:[],     
         page: 0,
         rowsPerPage: 8,
         adsViewOf:true
        }
      }
      
componentDidMount(){
    document.title = "Orders";
    this.props.GetBuyerOrder(this.props.auth)
}

componentWillReceiveProps(nextProps) {
  
    // console.log("1",nextProps.orders.orders)
  this.setState({
      data:nextProps.orders.orders
  })
}

handleChangePage = (event, page) => {
    this.setState({page});
  };
  
  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };
// DeleteteOrder=(item)=>{
//    const id = {
//        id:item._id
//    }
// //    console.log(id)
// this.props.DeleteOrder(id)
// }
    render() {
        const classes = useStyles;
        const {data, rowsPerPage, page,adsViewOf} = this.state;
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
      <StyledTableCell   component="th" >Email</StyledTableCell>
      <StyledTableCell   component="th" >PHONE NO</StyledTableCell>
        <StyledTableCell   component="th" >Product</StyledTableCell>
        <StyledTableCell   component="th" >Product Name</StyledTableCell>
        <StyledTableCell   component="th" >Category</StyledTableCell>
        <StyledTableCell   component="th" >Quantity</StyledTableCell>
        <StyledTableCell   component="th" >Price</StyledTableCell>
        <StyledTableCell   component="th" >total</StyledTableCell>
        <StyledTableCell   component="th" >Province</StyledTableCell>
        <StyledTableCell   component="th" >city</StyledTableCell>
        <StyledTableCell   component="th" >address</StyledTableCell>
       
       
      </TableRow>
  </TableHead>


  <TableBody>
  {/* <TableRow> */}
  {data.length>0 ?
          data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((users,i) => 
        //   console.log("here oredrs",users)
          <Orders key={i} user={users} index={i}  TableStyle={StyledTableCell} />
          
          )
          :<h1 style={{textAlign:"center",alignItems:"center",color:"blue"}} >No order yet</h1>}
{/* </TableRow> */}
  </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      // colSpan={2}
                      count={data.length}
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

Order.propTypes={
auth:PropTypes.object.isRequired,
orders:PropTypes.array
}

const mapStateToProps = state => ({
    auth:state.auth,
    orders:state.orders
  })


export default withRouter(connect(mapStateToProps,{GetBuyerOrder})(Order));


