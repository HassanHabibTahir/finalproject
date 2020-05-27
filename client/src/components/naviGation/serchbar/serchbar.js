import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from 'material-ui-search-bar'
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


<div>
<form  >
  <input type="text" name="search"   placeholder="Search.." onChange={this.serchItem} />
</form>
</div>

/*
            <div>
 <div className="search-box">
 <input   className="searc-text" type="text" name='' placeholder="type to search" />
 <SearchIcon className="search-btn" />
       </div>
       </div>
 <SearchBar
    size='large'
onChange={() => this.chniged()}
onRequestSearch={() =>  this.chniged()}
style={{
  margin: '0 auto',
  maxWidth: 800
}}

/>  */
        )
    }
}












// .................................




