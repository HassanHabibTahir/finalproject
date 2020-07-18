import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './headr.css';
import { common } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: "wrap",
        flexGrow: 1,
        height: 300,
    },
    paper: {
        // height: 280,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        color: "#ffff",
        background: 'transparent',
    },
}));
export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root} className='img'>
            {/* <hr></hr> */}
            <Grid container spacing={1} container direction="row" justify='center' alignItems="flex-start">
                <Grid item md={4}>
                    <Paper className={classes.paper} elevation={0}>
                        <div className='Our-Mission'>
                            <h2 className=''>Our Mission</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quis nihil esse, quas, aperiam suscipit libero perspiciatis corporis cupiditate dolore porro? In nobis pariatur libero vitae, maiores officiis? Nemo, quo!</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper} elevation={0}>
                        <div className='Information'>
                            <h2>Information</h2>
                            <ul className='info'>

                                <li>
                                    <i className="fa fa-address-book"  aria-hidden = "true"></i>
                                    Custumer service
                                </li>
                                <li>
                                    <i className="fa fa-bar-chart"  aria-hidden = "true"></i>
                                    Top Seller
                                </li>
                                <li>
                                    <i className="fa fa-user"  aria-hidden = "true"></i>
                                    Our Blog
                                </li>
                                <li>
                                    <i className="fa fa-registered"  aria-hidden = "true"></i>
                                    Term & Conditions
                                </li>
                            </ul>
                        </div>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper} elevation={0}>
                        <div className='Contect-Us'>
                            <h2 className=''>Contect Us</h2>
                            <ul className='infe'>
                                <li><b>Address:</b><br></br>
                                Gubachi Head Office,60/C Samanabad,Faisalabad
                                </li>
                                <li><b>Phone: </b>(+92) 316-6165806</li>
                                <li><b>Phone: </b>(+92) 343-8709278</li>
                                <li><b>Email: </b>Gubachisupport@gmail.com</li>
                            </ul>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <p >All Copyrights Reserverd <i className="fa fa-copyright"  aria-hidden = "true" ></i> 2020 Licence & Desigh By : Gubachi</p>
        </div>
    );
}
            // <div className="headerContainer">
            //     <div className='Foot1 common'>
            //         <h2 className='head'>Our Mission</h2>
            //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quis nihil esse, quas, aperiam suscipit libero perspiciatis corporis cupiditate dolore porro? In nobis pariatur libero vitae, maiores officiis? Nemo, quo!</p>
            //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quis nihil esse, quas, aperiam suscipit libero perspiciatis corporis cupiditate dolore porro? In nobis pariatur libero vitae, maiores officiis? Nemo, quo!</p>


            //     </div>
            //     <div className='Foot2 common'>
            //     <h2 className='head'>Information</h2>
            //         <ul className='info'>
            //             <li>About us</li>
            //             <li>Custumer service</li>
            //             <li>Term & Conditions</li>
            //             <li>Privacy Information</li>
            //         </ul>
            //     </div>
            //     <div className='Foot3 common'>
            //         <2h2 className='head'>About Us</h2>
            //         <p>3</p>
            //     </div>


            // </div>