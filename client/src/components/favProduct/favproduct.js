import React, { Component } from 'react'
import {GetFavourproducts} from '../../store/action/products/productaction'
import {connect} from 'react-redux'; 
import FavCard from './favCard'
import './favCard.css'
class Favproduct extends Component {
constructor(){
    super()
    this.state={
        Dfav:[]
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
        console.log(this.state.Dfav)
        
        const favcard=this.state.Dfav && this.state.Dfav!==null && this.state.Dfav!==undefined? this.state.Dfav.map((item,i)=>{
            console.log(item)
            return <FavCard   fCard={item} index={i} />
        }):null
        
        
        return (
            <div className="favourit-products"   style={{marginTop:"8vh"}} > 
            
                {favcard}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  
   Favourts: state.favproduct.FavouritProducts

  
  })

  export default connect(mapStateToProps,{GetFavourproducts})(Favproduct)