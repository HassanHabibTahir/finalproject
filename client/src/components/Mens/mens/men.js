import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { getAllMenProduts, FavouritAdds } from '../../../store/action/products/productaction'
import history from '../../history/history'
import MenCard from '../card/card'
import Fab from '@material-ui/core/Fab';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../mens.css'
import productitem from '../productItem/productitem';


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


      // return(
      //   <MenCard 

      //   images={item.imgSrc}
      //   price={item.price}
      //   description={item.discription}
      //   productName = {item.productname}
      //   category={item.category}
      //   _id={item._id}
      //   id={item._id}
      //   i={i}
      //   fav={item.fav}
      // />
      // )

      return (
        <Fade bottom cascade>
          <Card className="main">
            <Fab size="medium" color="secondary" aria-label="add" >
              {item.price}$
       </Fab>
            <FormControlLabel
              fontSize="large"

              style={{ float: "right" }}

              control={<Checkbox onClick={() => { this.addToFav(item, this.props.auth) }} checked={item.fav ? true : false} icon={<FavoriteBorder fontSize="large" />} checkedIcon={<Favorite fontSize="large" />} name="checkedH" />}

            />



            <div className="card_products">
              {/* <div className="deleteButton"> <Button className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div> */}

              <div className="top-section">


                <center> <Link to={`/product/productitems/${item._id}`}><img ref={id} valaue={i} className="img_container" src={"http://localhost:8080/" + item.imgSrc[0]} alt="img1" /></Link></center>

                <div className="nav">

                  <img onClick={() => { this.changedData(item._id, item.imgSrc[0]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[0]} />
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[1]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[1]} />
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[2]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[2]} />
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[3]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[3]} />

                </div>

                <div className="prduct_info">
                  <div className="name_product">


                    <div  ><h2 className="name_category">{item.category.toUpperCase()}

                    </h2>
                    </div>
                    <h2>{item.productname.toUpperCase()}

                    </h2>
                  </div>

                  <div className="dis">{item.discription}</div>

                </div>
              </div>


            </div>

          </Card>
        </Fade>
      )

    })


    return (
      <div className="mainvalue"   >
       
        {product}
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