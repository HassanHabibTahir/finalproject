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
           <p className="p_ar" >Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts</p>
           </div>
           
            </div>
            </Fade>
            <Fade up >
           <div className="detail_card" >
           <div  className="product_img" > <img src={SupCustomer}/>
           <h3>Support Customer</h3>
           <p className="p_ar" >Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts</p>
           </div>
         
      
           </div>
           </Fade>
           <Fade right >
           <div className="detail_card" >

           <div  className="product_img" ><img src={SaveProduct}/>
           <h3>Save Products</h3>
           <p className="p_ar" >Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts</p>
           </div>
        </div>
           </Fade>
            </div>


         

      
        </div>
    )
}
