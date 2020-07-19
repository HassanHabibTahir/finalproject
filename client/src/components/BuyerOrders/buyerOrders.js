import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import Divider from '@material-ui/core/Divider';
// import Orders from './Orders';
import TablePaginationActionsWrapped from './pagination/paginationn';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import {Link,withRouter} from 'react-router-dom';
import {buyergetallbuy} from "../../store/action/buyer/buyeraction"
import BuyetOrders from "./BuerOrder"
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

class Buyer extends Component {
    constructor(props) {
        super(props)
        this.state={
         ads:[],
         buyerorder:[],     
         page: 0,
         rowsPerPage: 8,
         adsViewOf:true
        }
      }
      
componentDidMount(){
    document.title = "GetOrders";
    this.props.buyergetallbuy()
}



componentWillReceiveProps(nextProps){

  // console.log("",nextProps.buyerorders)
  this.setState({
    buyerorder:nextProps.buyerorders
  })
  
}


handleChangePage = (event, page) => {
    this.setState({page});
  };
  
  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

    render() {

        const {buyerorder, rowsPerPage, page,adsViewOf} = this.state;
        console.log(this.props.buyerorders)
      return (
            <div style={{marginTop:"8vh"}}>
          
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
        <StyledTableCell   component="th" >TOTAL</StyledTableCell>
        <StyledTableCell   component="th" >SELLER ID</StyledTableCell>
        <StyledTableCell   component="th" >SELLER INFORMATION</StyledTableCell>       
      </TableRow>
  </TableHead>

           


  <TableBody>

   {   
   buyerorder.length>0 ?
        buyerorder.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
         .map((order,i) => 
        //  console.log()
         <BuyetOrders key={i} orders={order} index={i}  TableStyle={StyledTableCell} />
          
        )
      :<h1 style={{textAlign:"center",alignItems:"center",color:"blue"}} >No order yet</h1> 
      }
              </TableBody>
                 <TableFooter>
                  <TableRow>
                    <TablePagination
                      // colSpan={2}
                      count={buyerorder.length}
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


Buyer.protoType={

  auth: PropTypes.object.isRequired,
  buyerorders:PropTypes.array
}


const mapStateToProps = state => ({
    auth:state.auth,
    buyerorders:state.buyerOrder.buyerprdouct
  })
export default connect(mapStateToProps,{buyergetallbuy})(Buyer);


