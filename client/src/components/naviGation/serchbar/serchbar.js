import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from 'material-ui-search-bar'
import './serchbar.css'
export default class serchbar extends Component {
    render() {
        return (
            <div>
 <div className="search-box">
 <input   className="searc-text" type="text" name='' placeholder="type to search" />
 <SearchIcon className="search-btn" />
       </div>
       </div>
// {/* <SearchBar
// onChange={() => console.log('onChange')}
// onRequestSearch={() => console.log('onRequestSearch')}
// style={{
//   margin: '0 auto',
//   maxWidth: 1000
// }}
// /> */}
        )
    }
}












// .................................




