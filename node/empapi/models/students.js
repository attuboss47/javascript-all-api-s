const mongoose=require("mongoose")
const studentsModel=mongoose.model("students",{

    name:{type:String},
    dept:{type:String},
    age:{type:Number},
    rating:{type:Number},
    city:{type:String},
    house:{type:String}
    })

    module.exports=studentsModel;