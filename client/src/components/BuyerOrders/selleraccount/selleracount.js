import React, { Component } from 'react'
import { connect } from 'react-redux';

import {getSellerAccount} from '../../../store/action/buyer/buyeraction'


class Selleracount extends Component {

    componentDidMount(){
        console.log("this ",this.props.match.params)
    
    this.props.getSellerAccount(this.props.match.params)
    }


componentWillReceiveProps(nextProps){
console.log("this is next props",nextProps.SellerData)
}


    render() {
        return (
            <div>
                <h1>yes Dear</h1>
                <h1>yes Dear</h1>

                <h1>yes Dear</h1>
                <h1>yes Dear</h1>
                <h1>yes Dear</h1>
                <h1>yes Dear</h1>
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

export default connect(mapStateToProps, {getSellerAccount})(Selleracount)
