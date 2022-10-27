const {json} =require("body-parser")
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const classesModel=require("./models/classes")
const departmentsModel=require("./models/departments")
const housesModel=require("./models/houses")
const citiesModel=require("./models/cities")
const studentsModel=require("./models/students")


const app=express()
app.use(json())
app.use(cors())

const db="mongodb://localhost:27017/empdb"
mongoose.connect(db).then(()=>console.log("databased is connected succesfully")).catch((err)=>console.log(err))

app.get("/",(req,res)=>{
    res.send("server is running")
})
app.get("/classes", async(req,res)=>{
    const result=await classesModel.find({})
    res.json(result)
})
app.get("/departments",async (req,res)=>{
    const result= await departmentsModel.find({})
    res.send(result)
})
app.get("/houses",async (req,res)=>{
    const result=await housesModel.find({})
    res.send(result)
})
app.get("/cities",async(req,res)=>{
    const result=await citiesModel.find({})
    res.send(result)
})
app.get("/students",async(req,res)=>{
    const result=await studentsModel.find({})
    res.send(result)
})
const server=app.listen(9050,()=>{
    console.log("server is running on 9050-port" )
})