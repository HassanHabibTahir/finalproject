import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { getAllMenProduts, FavouritAdds } from '../../../store/action/products/productaction'
import history from '../../history/history'
import Fab from '@material-ui/core/Fab';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../mens.css'

import productitem from '../productItem/productitem';
import { Grid } from '@material-ui/core';


class MEN extends Component {
  constructor() {
    super()

  }


  componentDidMount() {

    this.props.getAllMenProduts(this.props.auth.user)

    //   axios.get("http://localhost:8080/api/Favour/FavproductId").then((users)=>{
    //     console.log("get",users)
    // })
  }
  addToFav = (fav, auth) => {

    if (!auth.isAuthenticated === false) {

      const userFavouritHandler = {
        favpro: fav,
        auth: auth.user.id
      }

      this.props.FavouritAdds(userFavouritHandler, auth)
      //  alert(fav)
      console.log(fav)
      // console.log(auth.user.id)
    }
    else {
      history.push('/login')
    }
  }


  changedData = (i, img) => {
    // console.log(i)
    // const index = this.target.valaue
    // console.log(index)
    // .imageContainer.src
    const containerSrc = this.refs[i].src

    console.log("this is second", containerSrc)
    this.refs[i].src = "http://localhost:8080/" + img
    // console.log(img) 
  }


  changedhandler=(e)=>{
    console.log(e)
    }
  render() {
    console.log(this.props.Products)
    const MenProducts = this.props.Products
    const { match: { params: { category, productname } } } = this.props;
    if (productname) {

      console.log(productname)
      var Prdouctsitems = MenProducts.filter(item => 
         item.category.toLowerCase() === category.toLowerCase() &&
          item.productname.toLowerCase() === productname.toLowerCase()

      )
    }
    else
      var Prdouctsitems = MenProducts.filter((item, index) => {

        return item.category.toLowerCase() === category.toLowerCase()

      })
    console.log(Prdouctsitems)
    let product = Prdouctsitems.map((item, i) => {
      let id = item._id

      return (
       <div>

<Fade bottom cascade>
         <div  className="main_container_card" >
         <Card className="main">
          
            <Fab size="medium" color="secondary" aria-label="add"  >
              {item.price}$
       </Fab>
  
            <FormControlLabel
              fontSize="large"

              style={{ float: "right" }}

              control={<Checkbox onClick={() => { this.addToFav(item, this.props.auth) }} checked={item.fav ? true : false} icon={<FavoriteBorder fontSize="large" />} checkedIcon={<Favorite fontSize="large" />} name="checkedH" />}

            />



            <div className="card_products">
           

               <div className="top-section">


                <center> <Link to={`/product/productitems/${item._id}`}><img ref={id} valaue={i} className="img_container" src={"http://localhost:8080/" + item?.imgSrc[0]} alt="serchproduct" /></Link></center>

                <div className="nav_images">

                  <img onClick={() => { this.changedData(item._id, item.imgSrc[0]) }} ref='image' src={"http://localhost:8080/" + item?.imgSrc[0]} alt="serchproduct" />
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[1]) }} ref='image' src={"http://localhost:8080/" + item?.imgSrc[1]}  alt="serchproduct"/>
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[2]) }} ref='image' src={"http://localhost:8080/" + item?.imgSrc[2]} alt="serchproduct" />
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[3]) }} ref='image'  src={"http://localhost:8080/" + item?.imgSrc[3]} alt="serchproduct"  />

                </div>

                <div className="product_info">
                  <div className="name_product">


                    <div  ><h2 className="name_category">{item.category.toUpperCase()}

                    </h2>
                    </div>
                    <h2>{item.productname.toUpperCase()}

                    </h2>
                  </div>

                </div>
              </div>


            </div>

          </Card>

         </div>
        </Fade>

       </div>
      )

    })


    return (
      <div  className="container-product">
      <div className="mainvalue"   >
    
        {product}
      </div>
    
      </div>
    )
  }
}




const mapStateToProps = (state) => ({

  Products: state.allProducts.AllusersProducts,
  // unique:state.allProducts.UniqueItem
  auth: state.auth,


})

export default connect(mapStateToProps, { getAllMenProduts, FavouritAdds })(MEN)