const mongoose = require("mongoose")

const transactionModel = mongoose.model("transactions",{
    accNo:{type:Number},
    accType:{type:String},
    amnt:{type:Number},
    trasType:{type:String},
})

module.exports = transactionModel