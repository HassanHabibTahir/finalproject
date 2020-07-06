import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom';
import {GetBuyerOrder,DeleteOrder} from "../../../store/action/cartAction/cartaction"
class Order extends Component {
    constructor(){
        super();
    this.state={
data:[],
        }
    }

componentDidMount(){
    this.props.GetBuyerOrder(this.props.auth)
}

componentWillReceiveProps(nextProps) {
  
    // console.log("1",nextProps.orders.orders)
  this.setState({
      data:nextProps.orders.orders
  })
}


DeleteteOrder=(item)=>{
   const id = {
       id:item._id
   }
//    console.log(id)
this.props.DeleteOrder(id)
}
    render() {
    
//         var a = this.state.data.reduce((r, e) => (r.push(...e), r), [])
//  console.log(a)
        return (
            <div style={{marginTop:"9vh"}} >
          
            {this.state.data.map((item)=>{
            console.log(item)
               return (
                   <div  onClick={()=>{this.DeleteteOrder(item)}} >
               <h1>{item.quantity}</h1>
               <h1>{item.email}</h1>
               </div>
               )
            })}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    auth:state.auth,
    orders:state.orders
  })


export default withRouter(connect(mapStateToProps,{GetBuyerOrder,DeleteOrder})(Order));


