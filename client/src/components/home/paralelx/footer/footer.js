import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
// import logo from '../resource/images/logo.png';'
import {Link }from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import {Email,Phone} from '@material-ui/icons';

import './resource/css/index.css'
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footerbg">
                <Grid container> 
                  <Grid item xs={12} sm={12} md={4} >
                      <h1 className="peraColor" >Gobachi</h1>
                 {/* <img src={logo} alt="logo"/> */}
                  <Typography   paragraph variant="h6"  align="justify"  className="peraColor">
                GOBACHI is the world's leading classifieds platform which provides local communities in high-growth markets with vibrant online marketplaces: G connects local people to buy, sell or exchange used goods and services by making it fast and easy for anyone to post a listing through their mobile phone or on the web.
              </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} >
                  <h1 className="peraColor"  >LINKS</h1>
                     
                  <Grid   
                   direction="row"
                   justify="center"
                   alignItems="center"
                  >
                    <Link to="/product/mens">
                       <ListItem alignItems="center">
                       <ListItemText style={{textAlign:"center" , }}
                 secondary="MEN"
                                     />
                       </ListItem>
                       </Link>
                       <Link to="/product/women">
                       <ListItem>
                       <ListItemText style={{textAlign:"center"}}
                      secondary="WOMEN"
                                     />
                       </ListItem>
                       </Link>
                       <Link to="/product/child">
                       <ListItem>
                       <ListItemText style={{textAlign:"center"}}
                      secondary="CHILD"
                                     />
                       </ListItem>
                       </Link>

                   </Grid >
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} alignItems="center" align="center" textAlign="center">
                     <h1 className="peraColor"  > CONTACTS</h1>
                       <div className="fontSizeSet">
                   
                     <div> 
                     <span> <Email style={{color:"blue" }} /></span>
                     <p>  productsgobachi@gmail.com</p>
                     </div> 
                     <div> 
                     <span>    <Phone style={{color:"blue"}} /></span>
                     <p>  0343-8709278</p>
                     </div> 
                       {/* <ListItem alignItems="center" align="center" textAlign="center" >
                    <ListItemAvatar  >
                      <Avatar>
                        <Email style={{color:"blue"}} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                      secondary="productsgobachi@gmail.com"
                    />
                      </ListItem> */}
                       {/* <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Phone style={{color:"blue"}} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                  secondary="03438709278"
                    />
                      </ListItem> */}
                       </div>
                       <Typography className="socialLinks"  variant="caption" > 
                         {/* <img src={require('../img/shop.jpg')} alt="fb"/> */}
                      <a href="https://twitter.com/HassanHabibTah1" > <img src={require('./resource/images/download (1).png')} alt="fb"/></a>
                     <a href = "https://www.instagram.com/hassantahir2587/"><img src={require('./resource/images/insta.jpg')} alt="fb"/></a>
                         <img src={require('./resource/images/skype.png')} alt="fb"/>
                         <a href="https://api.whatsapp.com/send?phone=03438709278"><img src={require('./resource/images/whatsapp.png')} alt="fb"/></a>
                         <a href="https://www.facebook.com/profile.php?id=100009237984857">   <img src={require('./resource/images/face.png')} alt="fb"/></a> 
                       </Typography>
                  </Grid>
                  
                </Grid>
                
                </div>
                <Grid container  className="copyWrite"> 
                  <Grid item xs={12} sm={12} md={12}>
                  <center>
                  <Typography variant="body2" > 
                  Copyright © 2020 Gobachi products saving Pakistan - All Rights Reserved.
                  </Typography>
              
                    </center>
                  </Grid>
                </Grid>
            </div>
        )
    }
}
export default Footer;
