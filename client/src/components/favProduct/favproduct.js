import React, { Component } from 'react'
import {GetFavourproducts} from '../../store/action/products/productaction'
import {connect} from 'react-redux'; 
import FavCard from './favCard'
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
        
        const favcard=this.state.Dfav.map((item,i)=>{
            return <FavCard   fCard={item} index={i} />
        })
        
        
        return (
            <div style={{marginTop:"8vh"}} > 
                <h1>THIS  IS FAVOURIT PRODUCT</h1>
                {favcard}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  
   Favourts: state.favproduct.FavouritProducts

  
  })

  export default connect(mapStateToProps,{GetFavourproducts})(Favproduct)