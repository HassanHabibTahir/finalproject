import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
 import {getAllMenProduts} from '../../../store/action/products/productaction'

 import { connect } from 'react-redux'; 

 class Women extends Component {



  componentDidMount (){
    this.props.getAllMenProduts()
   
  
  } 
    

    render() {
console.log(this.props.Products)
 const  MenProducts = this.props.Products

 let Prdouctsitems= MenProducts.filter(( item,index)=>{
  
      return item.category === "WOMEN"
  
})
console.log(Prdouctsitems)
      let product= Prdouctsitems.map((item)=>{

return    <Card className="main">

<div className="card_products">
  {/* <div className="deleteButton"> <Button className="buttondel" > <DeleteIcon   className="icon_del" /></Button></div> */}

<div className="top-section">
  
   <center> <img  className="img_container" src={"http://localhost:8080/"+item.imgSrc[0]} alt="img1" /></center>


{/* <div className="nav"> */}

{/* <img src={"http://localhost:8080/"+item.imgSrc[1]}/> */}
{/* <img src={"http://localhost:8080/"+item.imgSrc[2]}/> */}
{/* <img src={"http://localhost:8080/"+item.imgSrc[3]}/> */}

{/* </div> */}

<div className="product_info">

<div  className="name_product"><h2>{item.productname.toUpperCase()}<span className="price">${item.price}</span></h2>

</div>
<div className="dis">{item.discription}</div>

</div>
</div>


</div>

               </Card>
 
})


        return (
            <div  className="mainvalue"   style={{marginTop:"70px"}}>
           
            {product}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  
    Products:state.allProducts.AllusersProducts
   

  
  })

  export default connect(mapStateToProps,{getAllMenProduts})(Women)