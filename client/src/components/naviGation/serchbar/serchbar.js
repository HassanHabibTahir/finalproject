import React, { Component } from 'react'
// import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './serchbar.css'

export default class serchbar extends Component {
    constructor(props){
        super(props)
        this.state={
            search:''
        }
    }
    serchItem=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        
        return (
<div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
      <SearchIcon  fontSize="large" style={{color:"blue"}} />
     </button>
   </div>
</div>

        )
    }
}



{/* <SearchBar
// onChange={this.serchItem}
style={{
  margin: '0 auto',
  maxWidth: 800
}}
></SearchBar> */}








// .................................




