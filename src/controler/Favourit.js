const FavProducts = require('../module/favourit/favritAd');
const Produts = require('../module/products/product')

const favAdController = {
    favAdClicked:function(data,cb){


        //Changing kerni hai app k check box k liye
        FavProducts.findOne({user:data.body.user,adId:data.body._id},function(err,prod){
            console.log(prod)
            if(prod){
                Produts.findByIdAndUpdate(data.body._id,{$set:{fav:false}},function(err,favp){
                    console.log(err||favp)
                })
                console.log(Produts,FavProducts)
                FavProducts.findByIdAndDelete(prod._id,function(data,res){
                    cb(err,{found:true})
                })
            }else{
                Produts.findByIdAndUpdate(data.body._id,{$set:{fav:true}},function(err,fav){
                    console.log(err||fav)
                })
                console.log(Produts,FavProducts)
                let favAd = new FavProducts();
                favAd.adId = data.body._id;
                favAd.user = data.body.user ;
                favAd.save(function(err,ad){
                    if(ad._id){

                        cb(err,ad)
                    }
                })   
            }
        })

    },
    showFavouritProduct:function(data,cb){
        console.log(data.id)
        FavProducts.find({"user":data.id}).populate('adId').exec(function(err, fav){

            console.log(fav)

           let userFavads = fav.map(function(fav){
                    return fav.adId;
            });

            cb(null, userFavads);
            // if(ads.length > 0){
            //     Produts.find({"user":ads[0].user,"_id":ads[0].adId},function(err,ad){
            //         if(ad.length > 0){
            //             console.log(ad)
            //             cb(err,ad)
            //         }else{
            //             cb(err,{success:false})
            //         }
            //     })
            // }else{
            //     cb(err,{success:false})
            // }
        })
    }




}

module.exports = favAdController