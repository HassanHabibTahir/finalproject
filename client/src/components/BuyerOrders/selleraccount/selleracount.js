import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import './selleffffraccount.css';
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





const mapStateToProps = (state) => ({

    SellerData: state.buyerOrder.SELLERINFO,
    BuyerOrders: state.buyerOrder.buyerprdouct
    // ,SELLERINFO
    // unique: state.allProducts.addedItems,
    // auth: state.auth,
})

export default connect(mapStateToProps, { getSellerAccount })(Selleracount)


// "_id" : ObjectId("5f07e1426bac5037804518e3"),
//     "isVarified" : true,
//     "typeAdmin" : false,
//     "name" : "ali",
//     "email" : "test@test.com",
//     "password" : "$2a$10$QvjyiikA/rPwd8lO.K3tC.DC9ru3xbfqCerOl19XdQ76bLrPkXxdC",
//     "avatar" : "//www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=200&r=pg&d=mm",
//     "cellNo" : 43333,
//     "address" : "Games Village Estate Abuja, FCT, Unnamed Road, Abuja, Nigeria",
//     "city" : "Alīābad",
//     "province" : "Gilgit-Baltistan",
//     "bankcode" : "not yet",
//     "bankname" : "not yet",
//     "accountnumber" : "not yet",
//     "cart" : {
//         "items" : []
//     },
//     "userCondition" : "seller",
//     "__v" : 0
// }