const mongoose=require("mongoose")

const trasactionsModel=mongoose.model("transactions",{
    accNo:{type:Number},
    accType:{type:String},
    amnt:{type:Number},
    trasType:{type:String}
})
module.exports=trasactionsModel;