

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

import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withRouter} from 'react-router-dom';
import Spiner from '../../spnier/spiner'
import {getallProducts} from "../../../store/action/cartAction/cartaction"
import Products from './Products'
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
  },
});

class AllProducts extends Component {
    constructor(props) {
        super(props)
        this.state={
 
         AllProduct:[],     
         page: 0,
         rowsPerPage: 8,
         adsViewOf:true
        }
      }
      
componentDidMount(){
    document.title = "AllProducts";
    this.props.getallProducts()
}

componentWillReceiveProps(nextProps) {
  
  this.setState({
    AllProduct:nextProps.ForAdminProducts.allADProducts
  })
}

handleChangePage = (event, page) => {
    this.setState({page});
  };
  
  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

    render() {
        const classes = useStyles;
        const {AllProduct, rowsPerPage, page} = this.state;
      return (
            <div>
          
          <Grid container > 
    
    <Grid item xs={12} >
    <Paper>
    <Divider />
    <Grid  className="marginTop" > 
     
   

      <Grid item xs={12} md={12}>
   
                <Table  style={{width:"100%"}}   >
                <TableHead>
      <TableRow >
      <StyledTableCell   component="th" style={{  alignItems:"center"}}  >SR.NO</StyledTableCell>
        <StyledTableCell   component="th" >Product</StyledTableCell>
      <StyledTableCell   component="th" >Category</StyledTableCell>
      <StyledTableCell   component="th" >Product Name</StyledTableCell>
        <StyledTableCell   component="th" >Quantity</StyledTableCell>
        <StyledTableCell   component="th" >price</StyledTableCell>
        <StyledTableCell   component="th" >Product verification</StyledTableCell>
        <StyledTableCell   component="th" >Delete Products</StyledTableCell>
         {/*<StyledTableCell   component="th" >Product Name</StyledTableCell>
        <StyledTableCell   component="th" >Category</StyledTableCell>
        <StyledTableCell   component="th" >Quantity</StyledTableCell>
        <StyledTableCell   component="th" >Price</StyledTableCell>
        <StyledTableCell   component="th" >total</StyledTableCell> */}
  
       
       
      </TableRow>
  </TableHead>


  <TableBody>
  {/* <TableRow> */}
  {AllProduct.length>0 ?
          AllProduct.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((product,i) => 
 <Products key={i} Products={product} index={i}  />
          // console.log("here oredrs",order)
        //   <AllOeders key={i} orders={order} index={i}  TableStyle={StyledTableCell} />
          
          )
          :<h1 style={{textAlign:"center",alignItems:"center",color:"blue"}} >No product yet</h1> }
{/* </TableRow> */}
  </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      // colSpan={2}
                      count={AllProduct.length}
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


// AllProducts.propTypes={
//   auth: PropTypes.object.isRequired,
//   orders:PropTypes.object.isRequired,
//   GetAllsendOrders:PropTypes.func.isRequired
// }

const mapStateToProps = state => ({
    auth:state.auth,
  ForAdminProducts:state.Products
  // .allADProducts
  })


export default withRouter(connect(mapStateToProps,{getallProducts})(AllProducts));


