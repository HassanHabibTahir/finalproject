
import React, { Component } from 'react'
import Home from '../../components/home/home'
import Register from '../../components/auth/signUp'
import Login from '../../components/auth/login';

import MainHeader from '../../containers/Header/header';
import resetEmail from '../../components/auth/reset/resetemail'
import Resetpassword from '../../components/auth/reset/resetpassword';
// import Product from '../../components/auth/product/product';

import Favproduct from '../../components/favProduct/favproduct'
import { connect } from 'react-redux';
import {
  Router,

  Route,
  Switch,
  Redirect

} from "react-router-dom";
import history from '../../components/history/history'
import ProvatieRoutes from '../../components/privavte/private'
import Admin from '../../components/adminpanal/admin'
import MEN from '../../components/Mens/mens/men'
import Child from '../../components/Mens/child/child'
import Women from '../../components/Mens/women/women'
import Productitem from '../../components/Mens/productItem/productitem'
import Cart from '../../components/productCart/PCart';
import Serch from '../../components/serchProduct/searchProduc'
import io from "socket.io-client"
import Axios from 'axios';
import { SetChatData, AddNewMessage, AddNewRoom } from '../../store/action/ChatActions/ChatActions';
import Chat from "../../components/Chat/chat";
import UserRoutes from "../../components/UserDashboard/userNave/userNave" 
import BuyerOrder from './../../components/BuyerOrders/buyerOrders';
import Selleracount from '../../components/BuyerOrders/selleraccount/selleracount'
const socket = io(window.location.origin);
window.socket = socket;

function InitializeChat(auth, socket, dispatch) {
  Axios.get(`/api/chat/getall?user=${auth.user.id}`)
    .then(res => res.data)
    .then(chatRooms => {
      dispatch(SetChatData(chatRooms));
    })
    .catch(err => console.log(err));
    socket.emit("join", auth.user.id);
    socket.off("newMessage");
    socket.on("newMessage", (RoomID, message) => {
      dispatch(AddNewMessage({ RoomID, message }))
    }
    );
    socket.off("receiveroom");
    //receive 
    socket.on("receiveroom", (room) => {
      dispatch(AddNewRoom(room))
    });
 
}




//component will mount run befor  component
// component did mount run 
//componentDidUpdate run after  the component
//

class Routes extends Component {
  componentDidMount() {
    if (this.props.auth) {
      InitializeChat(this.props.auth, window.socket, this.props.dispatch)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth?.user != this.props.auth?.user) {
      if (this.props.auth) {
        InitializeChat(this.props.auth, window.socket, this.props.dispatch)

      }
    }
  }

  render() {
    return (
      <Router history={history}>
        <div><MainHeader />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/:token" component={Login} />
          <Route exact path="/getEmail/forgot" component={resetEmail} />
          <Route exact path="/buyerchat" component={Chat} />
          <Switch>
            <Route exact path="/reset/:token" component={Resetpassword} />
          </Switch>

          <Switch>
            <Route exact path="/product/:category" component={MEN} />
          </Switch>
          <Switch>
            <Route exact path="/product/:category/:productname" component={MEN} />
          </Switch>
          {/* <Switch>
            <Route exact path="/product/child" component={Child} />
          </Switch> */}
          <Switch>
            <Route exact path="/cartproductItems/loginbycart" component={Login} />
          </Switch>


          {/* <Switch>
            <Route exact path="/product/women" component={Women} />
          </Switch> */}
          <Switch>
            <Route exact path="/product/productitems/:id" component={Productitem} />
          </Switch>
          <Switch>
            <Route exact path="/serchProducts" component={Serch} />
          </Switch>


          <Switch>
            <ProvatieRoutes exact path="/cart" component={Cart} />
          </Switch>


          <Switch>
            <ProvatieRoutes exact path="/favourint" component={Favproduct} />
          </Switch>

          <Switch>
            <ProvatieRoutes exact path="/userNav/setting" component={UserRoutes} />
          </Switch>
          <Switch> <ProvatieRoutes exact path="/selleracount/:ids" component={Selleracount} /></Switch>

          {/* <Switch>
            <ProvatieRoutes path="/userproduct" exact component={UserDashboard} />
          </Switch> */}
          </div>
        <Switch>
          <ProvatieRoutes path="/Admin" exact component={Admin} />
        </Switch>
        <Switch>
          <ProvatieRoutes path="/userproduct" exact component={UserRoutes} />
        </Switch>


      <Switch>
            <ProvatieRoutes  path="/buyer/orders/getorder"  exact component={()=><BuyerOrder/>} />
          </Switch> 
        {/* <Switch>
          <Redirect to="/" />
        </Switch> */}
        {/* <Route path="/users" component={Users} /> */}
      </Router>


    )
  }
}
const mapStateToProps = (state) => ({
  errors: state.erorr,
  auth: state.auth,
})



export default connect(mapStateToProps)(Routes)