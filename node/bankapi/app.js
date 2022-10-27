const express=require("express")
const {json} =require("express")
const cors =require("cors")
const app=express()
const mongoose=require("mongoose")
const fs=require("fs")

const accountTypeModel=require("./models/accountType")
const transactionTypesModel=require("./models/transactiontypes")
const trasactionsModel=require("./models/transactions")
const benefsModel=require("./models/benefs")
const registerModel=require("./models/register")

app.use(cors())
app.use(json())




mongoose.connect("mongodb://127.0.0.1:27017/bankdb")
.then(()=>console.log("Bank DB is connect succefully"))
.catch((err)=>console.log(err))






app.get("/",(req,res)=>{
 res.send("Bankin app is working...")
})
app.post("/login",async(req,res)=>{
    const result =await registerModel.findOne(req.body)
    res.json(result)

})

app.post("/addregister",(req,res)=>{
    const newregister= new registerModel(req.body)
    newregister.save()
    res.send(`succesfully added the account. Customer ID-${req.body.custid}`)
})


app.get("/accounttypes",async(req,res)=>{
    const result=await accountTypeModel.find({})
    const newResult=result.map((item)=>({
        value: item.typeCode,
        label: item.name,
    }))
    res.json(newResult)

})

app.get("/transactiontypes",async(req,res)=>{
    const result= await transactionTypesModel.find({})
    const newResult=result.map((item)=>({
        value: item.typeCode,
        label: item.name,
    }))
    res.json(newResult)
})
app.post("/transaction",async(req,res)=>{
    const result=await trasactionsModel.find(req.body)
    res.send(result)

})
app.post("/transaction",(req,res)=>{
    const newTrans= new trasactionsModel(req.body)
    newTrans.save()
    res.send("succesfull completed the transaction..!")
})
app.post("/benefs",async(req,res)=>{
     const result=await benefsModel.find(req.body)
     res.json(result)

})
app.post ("/addbenefs",(req,res)=>{
    const newBenef= new benefsModel(req.body)
    newBenef.save()
    res.send(`succesfully added ${req.body.name} as beneficiary.`)
})
app.get("/getfile",(req,res)=>{
    fs.readFileO("C:\source",(err,data)=>{
        res.json(data)
    })
})

const server=app.listen(7500,()=>{
    console.log("sevrer is running on port 7500")
})