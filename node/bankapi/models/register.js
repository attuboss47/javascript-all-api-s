const mongoose=require("mongoose")

const registerModel=mongoose.model("registers",{
    accType:{type:String},
    fname:{type:String},
    lname:{type:String},
    custid:{type:Number},
    password:{type:String},
    isActive:{type:Boolean}

})

module.exports=registerModel;