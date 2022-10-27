const mongoose=require("mongoose")
const housesModel=mongoose.model("houses",{name:{type:String}})
module.exports=housesModel;