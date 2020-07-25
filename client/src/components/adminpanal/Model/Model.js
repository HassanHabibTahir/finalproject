import React from 'react';
import ReactDOM from 'react-dom';
// import { CSSTransition } from 'react-transition-group';

// import Backdrop from './backdrop';
// import './Mode.css';

// const Modal = props => {
//   return (
//     <React.Fragment>
//       {props.show && <Backdrop onClick={props.onCancel} />}
//       <CSSTransition
//         in={props.show}
//         mountOnEnter
//         unmountOnExit
//         timeout={200}
//         classNames="modal"
//       >
//       </CSSTransition>
//     </React.Fragment>
//   );
// };

// export default Modal;
class Modal extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>khkjhjkkjhkhkjkjlhlkjhlkjhklhjlkhlkjhlkjhhkjhkljhkjlhlkjhlkjhlkjhlkjhkljhkljhlkjhlkjhk</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
export default Modal;


// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import {Link} from 'react-router-dom'
// // import './cart.css'
// export default class Cart extends React.Component {
//     state = {
//         open: false,
//     };

//     handleClickOpen = () => {
//         this.setState({ open: true });
//     };

//     handleClose = () => {
//         this.setState({ open: false });
//     };

//     render() {
//         return (
//             <div>
//               asdfasdfasasdf
//               asfd
//               asf<h1>dsfasddfads</h1>
//                 {/* <Link  to="/cart" onClick={this.handleClickOpen}>
//                     <AddShoppingCartIcon  fontSize="large"  style={{color:'white'}} />
                    
//         </Link> */}
//          </div>
//         );
//     }
// }