const {json} =require("body-parser")
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const citiesModel=require("./models/cities")
const departmentsModel=require("./models/departments")
const studentsModel=require("./models/students")
const housesModel=require("./models/houses")


const app=express()
app.use(json()) 
app.use(cors())


const db="mongodb://localhost:27017/empdb"
mongoose.connect(db).then(()=>console.log("DB is connected succesfully")).catch((err)=>console.log(err))


app.get("/",(req,res)=>{
 res.send("content")
})


app.get("/cities", async(req,res)=>{
    const result=await citiesModel.find({})
    const newdata1 = result.map((item) => ({ value: item._id, label: item.name }));
  res.json(newdata1);
})


app.get("/departments",async(req,res)=>{
    const result=await departmentsModel.find({})
    const newdata1 = result.map((item) => ({ value: item._id, label: item.name }));
    res.json(newdata1);
})
app.post("/addhouse",(req,res)=>{
    const newObj=new housesModel(req.body)
    newObj.save()
})


app.get("/students",async(req,res)=>{
    const result= await studentsModel.find({})
    
  res.json(result);
})


app.get("/houses",async(req,res)=>{
 const result=await housesModel.find({})
 const newdata4 = result.map((item) => ({ value: item._id, label: item.name }));
  res.json(newdata4);
})
app.post("/filt",async(req,res)=>{
    const result =await studentsModel.find(req.body)
    res.json(result)
})


const server=app.listen(4040,()=>{
    console.log("employee is running on-4040 port")

})