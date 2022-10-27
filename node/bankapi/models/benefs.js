const mongoose=require("mongoose")
const benefsModel=mongoose.model("benefs",{
    
    accNo:{type:Number},
    refAccNo:{type:Number},
    accType:{type:String},
    name:{type:String},
    limit:{type:Number},
    isActive:{type:Boolean}

})
module.exports=benefsModel;