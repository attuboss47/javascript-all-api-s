const express=require("express")
const mongoose=require("mongoose")
// const {json}=require()
const questionsModel=require("./models/questionsModel")


const app=express()
// app.use(json())


mongoose.connect("mongodb://localhost:27017/learningbotdb")
.then(()=>console.log("database is connected successfully"))
.catch((err)=>console.log(err))

app.get("/",(req,res)=>{
    res.send("Learning bot api is working")
})
app.get("/all",async(req,res)=>{
    const result=await questionsModel.find({})
    res.json({result})

})

const server=app.listen(7070,()=>{
    console.log("server is running on 7070 port")
})