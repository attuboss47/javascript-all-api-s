const mongoose=require("mongoose")
const citiesModel=mongoose.model("cities",{
    name:{type:String},
})

module.exports=citiesModel;