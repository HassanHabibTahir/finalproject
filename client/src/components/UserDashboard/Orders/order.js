import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom';
import {GetBuyerOrder} from "../../../store/action/cartAction/cartaction"
class Order extends Component {


componentDidMount(){
    this.props.GetBuyerOrder(this.props.auth)
}

componentWillReceiveProps(nextProps) {
  
    console.log("1",nextProps.orders.orders)
//   this.setState({})
}

    render() {
        // this.props.orders.orders.map((item)=>{
            // console.log("gi",this.props.orders.orders)
      

        return (
            <div style={{marginTop:"9vh"}} >
                <h1>Orders</h1>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    auth:state.auth,
    orders:state.orders
  })


export default withRouter(connect(mapStateToProps,{GetBuyerOrder})(Order));
