const mongoose=require("mongoose")
const studentsModel=mongoose.model("students",{

    name:{type:String},
    dept:{type:String},
    age:{type:number},
    rating:{type:number},
    city:{type:String},
    house:{type:String}
    })

    module.exports=studentsModel;