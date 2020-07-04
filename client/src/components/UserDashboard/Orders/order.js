import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom';
import {GetBuyerOrder} from "../../../store/action/cartAction/cartaction"
class Order extends Component {


componentDidMount(){
    this.props.GetBuyerOrder(this.props.auth)
}


    render() {
        console.log(this.props.auth)
        return (
            <div style={{marginTop:"9vh"}} >
                <h1>Orders</h1>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    auth:state.auth
  })


export default withRouter(connect(mapStateToProps,{GetBuyerOrder})(Order));
