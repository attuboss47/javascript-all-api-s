const mongoose= require("mongoose")

const BenifModal= mongoose.model("benefs",{
    accNo:{type: Number},
    refaccNo:{type:Number},
    accType:{type:String},
    name:{type:String},
    limit:{type:Number},
    isActive:{type:Boolean},
})
module.exports= BenifModal