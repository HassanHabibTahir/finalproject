import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
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
        )
    }
}












// .................................




// import React from 'react'
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
//   import '../slider/style.css'

// class Slider extends React.Component {
//   render() {
//     return (<div className="mydiv">
//     <ImageGallery {... (
//         {
//           thumbnailPosition: "right",
//           useBrowserFullscreen: true,
//           showPlayButton: true,
//           showIndex: true,
//           height: "400px",
//           width: "400px",

    
//           items: [
//             {
//                 original: 'https://creativepool.com/files/candidate/portfolio/full/1010804.jpg',
//                 thumbnail: 'https://creativepool.com/files/candidate/portfolio/full/1010804.jpg',
//               },
//               {
//                 original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl9TOrwET3vFpyvkmpwpC8zXaJrIMPspIyIWMhs8-_OvONhxwG&usqp=CAU',
//                 thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl9TOrwET3vFpyvkmpwpC8zXaJrIMPspIyIWMhs8-_OvONhxwG&usqp=CAU',
//               },
//               {
//                 original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ5DWxWZcipAF-3IAWeloIG6XIhJcY-R9_X_USCa8EeL5QOCgg&usqp=CAU',
//                 thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ5DWxWZcipAF-3IAWeloIG6XIhJcY-R9_X_USCa8EeL5QOCgg&usqp=CAU',
//               },
//               {
//                 original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuJEg_aoPM7KFyxnke-OlJNaYPlh3Qq8H2cf4hfr67BoeRrxi8&usqp=CAU',
//                 thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuJEg_aoPM7KFyxnke-OlJNaYPlh3Qq8H2cf4hfr67BoeRrxi8&usqp=CAU',
//               },  {
//                 original: 'https://www.jvmshyamali.com/admin_panel/uploads/sub_menu_images/leftimage/a5771bce93e200c36f7cd9dfd0e5deaa.jpg',
//                 thumbnail: 'https://www.jvmshyamali.com/admin_panel/uploads/sub_menu_images/leftimage/a5771bce93e200c36f7cd9dfd0e5deaa.jpg',
//               },  {
//                 original: 'https://img.favpng.com/19/13/3/scania-ab-tour-bus-service-car-coach-png-favpng-knM9cv6Qjem8JiyfUADv9uZzd.jpg',
//                 thumbnail: 'https://img.favpng.com/19/13/3/scania-ab-tour-bus-service-car-coach-png-favpng-knM9cv6Qjem8JiyfUADv9uZzd.jpg',
//               },  {
//                 original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdfD-7XG_kQetZ3XrO-yJsNIPfs1dFDmsIEese2XenEZqihiJ6&usqp=CAU',
//                 thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdfD-7XG_kQetZ3XrO-yJsNIPfs1dFDmsIEese2XenEZqihiJ6&usqp=CAU',
//               }, 
//           ]
//         })}/></div>);
//   }
// }
//  export default Slider