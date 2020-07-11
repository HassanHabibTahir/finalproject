import React from 'react'
import Fade from "react-reveal/Fade";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const dummyGridData = [
    {
        title: "Mens Collection",
        img: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        link: "/mens"
    },
    {
        title: "Mens Collection",
        img: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        link: '/women'
    },
    {
        title: "Mens Collection",
        img: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        link: '/child'
    }
]

export default function CategoryGrid(props) {

    const classes = useStyles();


    return (
        <Grid container
            className={classes.container}
        >
         
            <Grid item xs={12} sm={6} md={6} lg={4} className={classes.categoryGridItem}>
            <Fade right >     <div className={classes.gridImgBox}>
                    <img className={classes.gridImg} src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mens Collection" />
                    <div className={classes.overlay}>
                        <h1 style={{ color: 'white', fontWeight: 600 }}>Men's Collection</h1>

                        <Button component={Link} to="/product/mens" variant="contained" size="large" color="primary" className={classes.button}> Shop Now </Button>
                    </div>
                </div>
                </Fade>
            </Grid >
      
            <Grid item xs={12} sm={6} md={6} lg={4} className={classes.categoryGridItem}>
            <Fade left >     <div className={classes.gridImgBox}>
                    <img className={classes.gridImg} src="https://mir-s3-cdn-cf.behance.net/projects/404/61126c78044397.Y3JvcCwxMTUwLDkwMCwyNSww.jpg" alt="women's Collection" />
                    <div className={classes.overlay} >
                        <h1 style={{ color: 'white' }}>Women's Collection</h1>
                        <Button component={Link} to="/product/women" variant="contained" size="large" color="primary" className={classes.button}>Shop Now</Button>
                    </div>
                </div>
            </Fade>
            </Grid >
            <Grid item xs={12} sm={12} md={12} lg={4} className={classes.categoryGridItem}>
            <Fade down >          <div className={classes.gridImgBox}>
                    <img className={classes.gridImg} src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mens Collection" />
                    <div className={classes.overlay}>
                        <h1 style={{ color: 'white' }} >Children Collection</h1>
                        <Button component={Link} to="/product/child" Size variant="contained" size="large" color="primary" className={classes.button}> Shop Now </Button>
                    </div>
                </div>
</Fade>
            </Grid >


        </Grid >
    )
};


const useStyles = makeStyles({

    categoryGridItem: {
        height: 300,
        position: 'relative',
        padding: 5,

        '&:hover  a ': {
            opacity: 1
        },
        '&:hover  img': {
            transform: 'scale(1.2)'
        },

    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: "100%",
        top: 0,
        backgroundColor: 'rgba(62, 160, 235 ,0.1)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: "pointer",


    },

    gridImgBox: {

        position: 'relative',
        width: '100%',
        height: "100%",
        overflow: 'hidden',

    },
    gridImg: {
        width: '100%',
        height: "100%",
        transition: 'transform 1s'
    },
    button: {

        width: '30%',
        height: '20%',
        opacity: 0,
        marginTop: 15,

        transition: "opacity 0.4s",
        transitionDelay: '0.3s',
        border: '5px solid white',
        textAlign: 'center',
    },


})