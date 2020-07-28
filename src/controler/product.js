const Product = require('../module/products/product');
const Faourit = require('../module/favourit/favritAd')
const productControler = {
    submitProduct:function(data,callback){
        let producatData = new Product();
   
     producatData.user = data.user.id;
    //  producatData.user = data.user.province;
    //  producatData.user = data.user.city;
    //  producatData.user = data.user.address;
     producatData.price = data.body.price;
     producatData.discount = data.body.discount;
     producatData.productname = data.body.productname;
     producatData.discription = data.body.discription;
     producatData.category = data.body.category;
     producatData.productVerified=null
    //  producatData.imgSrc = []

    data.files.forEach((file)=>{
        // './files/'+
        console.log(file)
        producatData.imgSrc.push(file.filename);
     });
     producatData.save(function(err,product){
            if(product){
                callback(err,product)
            }
        })
    
    },
  



    deleteProduct:(data,callback)=>{

        Product.findByIdAndDelete({ _id: data.params.id }).then((profile) => {
        })   
           
        
        Faourit.deleteMany({"adId":data.params.id}).then((re)=>{
      
        })

        callback();
    }

}

module.exports = productControler



