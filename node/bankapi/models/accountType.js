const mongoose=require("mongoose")

const accountTypeModel=mongoose.model("accounttypes",{
    typeCode:{type:String},
    name:{type:String}

})
module.exports=accountTypeModel;
