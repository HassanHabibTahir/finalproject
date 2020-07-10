import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './selleraccount.css';
import { getSellerAccount } from '../../../store/action/buyer/buyeraction'


class Selleracount extends Component {

    componentDidMount() {
        console.log("this ", this.props.match.params)

        this.props.getSellerAccount(this.props.match.params)
    }


    componentWillReceiveProps(nextProps) {
        console.log("this is next props", nextProps.SellerData)
    }


    render() {
        return (
            <Grid>
           <div  style={{marginTop:"28vh"}}>
           <h1 className="title-pen"> User Profile <span>UI</span></h1>
<div className="user-profile">
	<img className="avatar" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
    <div className="username">Will Smith</div>
  <div className="bio">
  	Senior UI Designer
  </div>
    <div className="description">
      I use to design websites and applications
      for the web.
  </div>
  <ul className="data">
    <li>
      <span className="entypo-heart"> 127</span>
    </li>
    <li>
      <span className="entypo-eye"> 853</span>
    </li>
    <li>
      <span className="entypo-user"> 311</span>
    </li>
 </ul>
</div>
  <footer>
    <h1>inspired by 
  <a href="https://dribbble.com/shots/1033074-User-Profile">
  <span className="entypo-dribbble"></span> shot</a>
    </h1>
  </footer>

           </div>
            </Grid>
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
