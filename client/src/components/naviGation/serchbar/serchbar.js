import React, { Component } from 'react'
// import SearchIcon from '@material-ui/icons/Search';

import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import './serchbar.css'
import {connect} from 'react-redux';
import {serchProduct} from '../../../store/action/products/productaction'
class Serchbar extends Component {
    constructor(props){
        super(props)
        this.state={
            search:''
        }
    }
    serchItem=(event)=>{
        this.setState({ [event.target.name]: event.target.value   
        });
   
     
    }

    searchProducts=()=>{

        const srcData = {
            keyword:this.state.search
        }

        this.props.serchProduct(srcData,this.props.auth.user)

        this.setState({
            search:''
        })
    }

    render() {
        
        return (
<div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" onChange={this.serchItem}   name="search"  value={this.state.search}     placeholder="What are you looking for?"/>
      <button type="submit" onClick={this.searchProducts}    class="searchButton">
      <SearchIcon  fontSize="large" style={{color:"blue"}} />
     </button>
   </div>
</div>

        )
    }
}


Serchbar.propTypes={
    auth:PropTypes.object.isRequired,
    serchProduct:PropTypes.func.isRequired
}

const mapStateToProps=(state)=>({
  
      auth:state.auth,
  
    
    })
  export default connect(mapStateToProps,{serchProduct})(Serchbar);

{/* <SearchBar
// onChange={this.serchItem}
style={{
  margin: '0 auto',
  maxWidth: 800
}}
></SearchBar> */}








// .................................




