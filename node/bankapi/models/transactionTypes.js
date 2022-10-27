const mongoose=require("mongoose")

const transactionTypesModel=mongoose.model("transactiontypes",{
    typeCode:{type:String},
    name:{type:String}

})
module.exports=transactionTypesModel;