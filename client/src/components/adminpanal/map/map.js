import React, { Component } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
// import 'react-leaflet/lib/'
import icon from './assests/PikPng.com_push-pin-png_381561.png'
import './map.css'
import{Map, TileLayer, Marker, Popup} from 'react-leaflet';


var myIcon  = L.icon({
    iconUrl: icon,
    // shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] 
})

export default class LeafLet extends Component {

constructor(){
    super();
    this.state = {
     
        lat: 31.3808688,
        lng: 73.0663113,
        zoom: 10,
        logg:false
      }
}

    render() {
//       latitude: 30.7285507
// longitude: 72.6505842


// const {locations}= this.props.location;

// if(locations!==undefined && locations!==null){
 
//   this.setState({
//      lat:locations.latitude,
//      lng:locations.longitude
//   })

// }
// let position;
// this.state && this.state.lng !==undefined && this.state.lat!==undefined&&this.state.lng!==null&&this.state.lat!==null?
//  position = [this.state.lat,this.state.lng]:null

      // console.log("maplocation",this.props.location)
  
      const position = [this.props.location.latitude,this.props.location.longitude]
       
      // const position = [this.state.lat,this.state.lng]
      return (
            <div id="mapid">
                <Map  className="Map"  center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}  >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
            </div>
        )
    }
}
