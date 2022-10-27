const mongoose=require("mongoose")
const departmentsModel=mongoose.model("departments",{name:{type:String}})
module.exports=departmentsModel;