const express =require("express")
const {json} = require("express")
const cors = require("cors")
const fs = require("fs")
const mongoose = require("mongoose")
const accountTypeModel= require("./accountTypes")
const transactionModel = require("./transactions")
const transactionTypesModel =require("./transactionTypes")
const BenifModal = require("./benifs")


const app = express()
app.use(json())
app.use (cors())
mongoose.connect("mongodb://localhost/bankdb").then(()=>console.log("Bank db is connected successfully")).catch((err)=>console.log(err))


app.get("/",(req,res)=>{
    res.send("banking App is Ready")
})

app.get("/acctype",async(req,res)=>{
    const result = await accountTypeModel.find({})
    const newData = result.map(item=>({value:item.typeCode, label:item.name}))
    res.json(newData)
})

app.post("/transaction",(req,res)=>{
    const newTrans = new transactionModel(req.body)
    newTrans.save()
    res.send("Successfully Completed the Transaction")
  res.json(result)
})

app.post("/alltransaction",async(req,res)=>{
    const result = await transactionModel.find(req.body)
    res.send(result)
})

app.get("/trastype",async(req,res)=>{
    const result = await transactionTypesModel.find({})
      const newresult=  result.map(item=>({value:item.typeCode, label:item.name }))
        res.json(newresult)
})


app.post("/balance",async(req,res)=>{
    const result = await transactionModel.find(req.body)
    const credits = result.filter(item=> item.trasType==="C")
    .map((item)=>item.amnt);
    const debits = result.filter(item=> item.trasType==="D")
    .map((item)=>item.amnt);
    const creditAmnt = credits.reduce((acc,curr )=>acc + curr)
    const debitsAmnt = debits.reduce((acc,curr)=> acc + curr);
    const balance = creditAmnt - debitsAmnt;
    res.json({creditAmnt,debitsAmnt,balance})
})

app.post("/benefs",async(req,res)=>{
    const result = await BenifModal.find(req.body)
    res.json(result)
})

app.post("/addbenefs",(req,res)=>{
    const newBenef = new BenifModal(req.body)
    newBenef.save();
  res.send(`Successfully added ${req.body.name} as beneficiary.`)
})

app.get("/getfile",(req,res)=>{
    fs.readFile("",(err,data)=>{
    res.send(data) })
})

const server= app.listen(7500,()=>{
    console.log("banking service is running up on port 7500")
})