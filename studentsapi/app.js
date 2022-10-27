const express=require("express")
const studentsInfo=require("./dbinfo")
const { json } =("body-parser") 
const cors=require("cors")

const app=express()

app.use(json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("attuboss47")

})

app.get("/all",(req,res)=>{
    res.send(studentsInfo)
})
app.post("/sportswise",(req,res)=>{
    const filtered=studentsInfo.filter((item)=>item.favsports===req.body.sports)
    res.json(filtered)
})
app.get("/classwise",(req,res)=>{
    const filtered=studentsInfo.filter((item)=>item.class===req.body.class && item.div.toUpperCase()===req.body.div.toUpperCase())
    res.json(filtered)
})
const server =app.listen(5051,()=>{
    console.log("baba g ki booty shake")
})