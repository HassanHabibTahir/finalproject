import React from 'react'
import './details.css'
import HomeDelivery from './img/truck.png'
import SupCustomer from './img/package.png'
import SaveProduct from './img/value.png'
import Fade from "react-reveal/Fade";
export default function details() {
    return (
        
        <div>


<div className="detail_container" >
<Fade left >
           <div className="detail_card" > 
           <div className="product_img" ><img src={HomeDelivery}/>
           <h3>Home Delivery</h3>
           <p className="p_ar" >Home delivery is the bringing of items to the customer's home rather than the customer taking or collecting them from the store. ... Home delivery is the bringing of items to the customer's home rather than the customer taking or collecting them from the store.</p>
           </div>
           
            </div>
            </Fade>
            <Fade up >
           <div className="detail_card" >
           <div  className="product_img" > <img src={SupCustomer}/>
           <h3>Support Customer</h3>
           <p className="p_ar" >Customer support is the range of services you offer to help your customers get the most out of your product and to resolve their problems. Customer support includes things like answering customer questions, providing assistance with onboarding, troubleshooting, and upgrading customers to a new product or service.</p>
           </div>
         
      
           </div>
           </Fade>
           <Fade right >
           <div className="detail_card" >

           <div  className="product_img" ><img src={SaveProduct}/>
           <h3>Save Products</h3>
           <p className="p_ar" >Save client/ buyer   products , product will not be violate by rider until buyer not get .
           buyer when buy order form the seller   and seller man gives save  product orders. Because this order is safely reached end to the buyer ,
           therefor  its is exact phase   </p>
           </div>
        </div>
           </Fade>
            </div>


         

      
        </div>
    )
}
