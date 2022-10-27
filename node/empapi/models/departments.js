const mongoose=require("mongoose")
const departmentsModel=mongoose.model("departments",{
    name:{type:String},
    nose:{type:Number}
})

module.exports=departmentsModel;