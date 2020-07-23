import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { getAllMenProduts, FavouritAdds } from '../../../store/action/products/productaction'
import Pagination from '@material-ui/lab/Pagination';
import history from '../../history/history'
import Fab from '@material-ui/core/Fab';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../mens.css'
import productitem from '../productItem/productitem';
import { Grid } from '@material-ui/core';
import Spiner from '../../spnier/spiner';
const BURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';

class MEN extends Component {
  constructor() {
    super()

this.state={
  loader:false,
  page: 2,
  visible: 2,
}

  }


  componentDidMount() {

    this.props.getAllMenProduts(this.props.auth.user,this.state.page)

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
    this.refs[i].src = `${BURL}/`+img
    // console.log(img) 
  }

  // imgesLoaded
  imgesLoaded=(e)=>{
    this.setState({
      loader:true
    })
    }


 data = (page)=>{
console.log(page)
}
  //   loadMore = number => {
  //     this.setState({ page: this.state.page + number });
  //     // this.loadPosts(this.state.page + number);
  //     this.data(this.state.page)
  // };

  // loadLess = number => {
  //     this.setState({ page: this.state.page - number });
  //     // this.loadPosts(this.state.page - number);
  // };


//   componentWillReceiveProps=(nextProps)=>{
// if(nextProps){
//   this.setState({

//   })
// }
//   }


loadMore=()=>{
  this.setState((prev) => {
    return {visible: prev.visible + 1};
  });
}


  render() {
    const {page}= this.state
    console.log(this.props.match.params)
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
    console.log(this.state.loader)
     
    let product = Prdouctsitems.slice(0, this.state.visible).map((item, i) => {
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


     {<center> <Link to={`/onlyproduct/productitems/${item._id}`}><img   onLoad={this.imgesLoaded}  ref={id} valaue={i} className="img_container" src={`${BURL}/` + item?.imgSrc[0]} alt="serchproduct" /></Link></center>}

           {this.state.loader?<div className="nav_images">

                  <img onClick={() => { this.changedData(item._id, item.imgSrc[0]) }} ref='image' src={`${BURL}/`+item?.imgSrc[0]} alt="serchproduct" />
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[1]) }} ref='image' src={`${BURL}/` + item?.imgSrc[1]}  alt="serchproduct"/>
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[2]) }} ref='image' src={`${BURL}/` + item?.imgSrc[2]} alt="serchproduct" />
                  <img onClick={() => { this.changedData(item._id, item.imgSrc[3]) }} ref='image'  src={`${BURL}/`+ item?.imgSrc[3]} alt="serchproduct"  />

                </div>:<Spiner/>}

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
      <br/>
      <br/>
 <br/>
 <br/>
 <br/>

 <div>
<section className="pagination_page">


             {this.state.visible < this.props?.Products?.length &&
             <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
          }
{/* {page>1 ? (<Link   onClick={() => this.loadMore(1)}>     Next ({page + 1})</Link>):""} */}
{/* <Link    onClick={() => this.loadLess(1)} >  Previous ({this.state.page - 1})</Link> */}

</section>


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






// export const list = page => {
//   return fetch(`${process.env.REACT_APP_API_URL}/posts/?page=${page}`, {
//       method: "GET"
//   })
//       .then(response => {
//           return response.json();
//       })
//       .catch(err => console.log(err));
// };




// import React, { Component } from "react";
// import { list } from "./apiPost";
// import DefaultPost from "../images/mountains.jpg";
// import { Link } from "react-router-dom";

// class Posts extends Component {
//     constructor() {
//         super();
//         this.state = {
//             posts: [],
//             page: 1,
//         };
//     }

//     loadPosts = page => {
//         list(page).then(data => {
//             if (data.error) {
//                 console.log(data.error);
//             } else {
//                 this.setState({ posts: data });
//             }
//         });
//     };

//     componentDidMount() {
//         this.loadPosts(this.state.page);
//     }

//     loadMore = number => {
//         this.setState({ page: this.state.page + number });
//         this.loadPosts(this.state.page + number);
//     };

//     loadLess = number => {
//         this.setState({ page: this.state.page - number });
//         this.loadPosts(this.state.page - number);
//     };

//     renderPosts = posts => {
//         return (
//             <div className="row">
//                 {posts.map((post, i) => {
//                     const posterId = post.postedBy
//                         ? `/user/${post.postedBy._id}`
//                         : "";
//                     const posterName = post.postedBy
//                         ? post.postedBy.name
//                         : " Unknown";

//                     return (
//                         <div className="card col-md-4" key={i}>
//                             <div className="card-body">
//                                 <img
//                                     src={`${
//                                         process.env.REACT_APP_API_URL
//                                     }/post/photo/${post._id}`}
//                                     alt={post.title}
//                                     onError={i =>
//                                         (i.target.src = `${DefaultPost}`)
//                                     }
//                                     className="img-thunbnail mb-3"
//                                     style={‌{ height: "200px", width: "100%" }}
//                                 />
//                                 <h5 className="card-title">{post.title}</h5>
//                                 <p className="card-text">
//                                     {post.body.substring(0, 100)}
//                                 </p>
//                                 <br />
//                                 <p className="font-italic mark">
//                                     Posted by{" "}
//                                     <Link to={`${posterId}`}>
//                                         {posterName}{" "}
//                                     </Link>
//                                     on {new Date(post.created).toDateString()}
//                                 </p>
//                                 <Link
//                                     to={`/post/${post._id}`}
//                                     className="btn btn-raised btn-primary btn-sm"
//                                 >
//                                     Read more
//                                 </Link>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     };

//     render() {
//         const { posts, page } = this.state;
//         return (
//             <div className="container">
//                 <h2 className="mt-5 mb-5">
//                     {!posts.length ? "No more posts!" : "Recent Posts"}
//                 </h2>

//                 {this.renderPosts(posts)}

//                 {page > 1 ? (
//                     <button
//                         className="btn btn-raised btn-warning mr-5 mt-5 mb-5"
//                         onClick={() => this.loadLess(1)}
//                     >
//                         Previous ({this.state.page - 1})
//                     </button>
//                 ) : (
//                     ""
//                 )}

//                 {posts.length ? (
//                     <button
//                         className="btn btn-raised btn-success mt-5 mb-5"
//                         onClick={() => this.loadMore(1)}
//                     >
//                         Next ({page + 1})
//                     </button>
//                 ) : (
//                     ""
//                 )}
//             </div>
//         );
//     }
// }

// export default Posts;