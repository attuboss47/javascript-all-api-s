const mongoose=require("mongoose")
const classesModel=mongoose.model("classes",{name:{type:String}})
module.exports=classesModel;