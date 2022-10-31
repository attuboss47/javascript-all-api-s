const mongoose=require("mongoose")
const questionsModel=mongoose.model("questions",{
    title:{type:String},
    keywords:{type:String},
    isActive:{type:Boolean}
})
module.exports=questionsModel;