import React, { Component } from 'react'
import {GetFavourproducts} from '../../store/action/products/productaction'
import {connect} from 'react-redux'; 
import FavCard from './favCard'
import '../Mens/mens.css';
import PropTypes from 'prop-types';

class Favproduct extends Component {
constructor(){
    super()
    this.state={
        Dfav:[],
        favadds:false
    }
}


componentDidMount(){
    this.props.GetFavourproducts()
}

componentWillReceiveProps(nextProps) {

    if(nextProps.Favourts !==undefined && nextProps.Favourts!== null) {

       this.setState({
        Dfav: nextProps.Favourts,
          
       })
    }
}
    render() {
        const favcard=this.state.Dfav && this.state.Dfav!==null && this.state.Dfav!==undefined? this.state.Dfav.map((item,i)=>{
            console.log(item)
            return <FavCard   fCard={item} index={i} />
        }):null
       
        
        
        return (
            <div  className="container-product">
            <div className="mainvalue"   >
          
              { this.state.Dfav.length<=0?  <div>

<img src={require('./img/heart.png')} />
<hr />
</div>:favcard}
            </div>
          
            </div>
        )
    }
}

Favproduct.propTypes={
    Favourts:PropTypes.array,
    GetFavourproducts:PropTypes.func.isRequired
}

const mapStateToProps=(state)=>({
  
   Favourts: state.favproduct.FavouritProducts

  
  })

  export default connect(mapStateToProps,{GetFavourproducts})(Favproduct)