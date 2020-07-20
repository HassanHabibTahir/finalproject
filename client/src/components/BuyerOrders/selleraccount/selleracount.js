import React, { Component } from 'react';

import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import './selleffffraccount.css';
import PropTypes from 'prop-types';
import { getSellerAccount } from '../../../store/action/buyer/buyeraction'


class Selleracount extends Component {
constructor(props){
    super(props)
    this.state={
        data:null
    }
}
    componentDidMount() {
        console.log("this ", this.props.match.params)

        this.props.getSellerAccount(this.props.match.params)
    }


    componentWillReceiveProps(nextProps) {
        console.log("this is next props", nextProps.SellerData)
        if(nextProps.SellerData!==undefined||nextProps.SellerData!==null){
            this.setState({
                data:{...nextProps.sellerData}
            })
        }
    }


    render() {
    
        const  seller = this.props.SellerData
        console.log("state data",seller)
        return (
     
            
       <div  style={{marginTop:"10vh"}}>
           <h1 className="title-pen"> GOBACHI <span>SELLER</span></h1>
<div className="user-profile">
	<img className="avatar" src={seller.avatar} alt="Ash" />
    <div className="username">{seller.name}</div>
    <div className="description">
I AM SELLEING PRODUCTS ON GOBACHI PLATE FORM
  </div>
</div> 

 <table className="seller_acount_table">
  <thead>
    <tr className="table_tr_seller" >
      <th  className="table_heading" scope="col">EMAIL</th>
      <th  className="table_heading" scope="col">{seller.email}</th>
      <th className="table_heading" scope="col">CELL NO</th>
      <th className="table_heading"  scope="col">{seller.cellNo}</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table_tr_seller" >
    <th  className="table_heading"  scope="col">PROVINVE</th>
        <th   className="table_heading" scope="col">{seller.province}</th>
      <th  className="table_heading"  scope="col">CITY</th>
        <th  className="table_heading"  scope="col">{seller.city}</th>
    </tr>
    <tr className="table_tr_seller" >
    <th   className="table_heading"   scope="col">ADRESS</th>
        <th  className="table_heading"    scope="col">{seller.address}</th>
      <th   className="table_heading"    scope="col">BANK CODE </th>
        <th   className="table_heading"   scope="col">{seller.bankcode}</th>
    </tr>
    <tr className="table_tr_seller" >
    <th  className="table_heading"   scope="col">BANK NAME</th>
        <th   className="table_heading"   scope="col">{seller.bankname}</th>
      <th   className="table_heading"   scope="col">ACCOUNT NUMBER </th>
        <th  className="table_heading"    scope="col">{seller.accountnumber}</th>
    </tr>
  </tbody>
</table> 
<Button  onClick={() => window.print()} >PRINT ACCOUNT </Button>
</div>





  
        )
    }
}


Selleracount.protoType={
  SellerData:PropTypes.object.isRequired

}


const mapStateToProps = (state) => ({

    SellerData: state.buyerOrder.SELLERINFO,
    BuyerOrders: state.buyerOrder.buyerprdouct
  
})

export default connect(mapStateToProps, { getSellerAccount })(Selleracount)

