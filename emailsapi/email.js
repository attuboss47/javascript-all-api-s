const express=require("express")
const cors=require("cors")
const app=express()
const {json} = require("body-parser")
app.use(cors())
app.use(json())

app.get("/",(req,res)=>{
    res.send("hello ")
})
app.get("/attuboss47",(req,res)=>{
    attuboss47=[ 
        {
            fname:"atif",
            lname:"shaikh",
            email:"attuboss47@gmail.com",
            mobile:9309150392,
            address:"Nanded",
            isActive:true,
            occupation:"MERN STACK DEVELOPER"
            
        },
        {
            fname:"payal",
            lname:"more",
            email:"morepayal@gmail.com",
            mobile:9766009877,
            address:"bombay",
            isActive:false,
            occupation:"MERN STACK DEVELOPER"
        },
        {
            fname:"jabbar",
            lname:"khan",
            email:"jabbarkhan@gmail.com",
            mobile:7776888667,
            address:"Himayat Nagar",
            isActive:true,
            occupation:"MERN STACK DEVELOPER"
            
        },
        {
            fname:"irfan",
            lname:"garve",
            email:"irfangarve@gmail.com",
            mobile:8806558239,
            address:"Washim",
            isActive:true,
            occupation:"MERN STACK DEVELOPER"
            
        },
        {
            fname:"ashfaq",
            lname:"shaikh",
            email:"pakya@gmail.com",
            mobile:8623038373,
            address:"Gangakhed",
            isActive:false,
            occupation:"MERN STACK DEVELOPER"

        },
        {
            fname:"saad",
            lname:"shaikh",
            email:"sksaad@gmail.com",
            mobile:7499864926,
            address:"amravati",
            isActive:true,
            occupation:"MERN STACK DEVELOPER"

        },
        {
            fname:"muzammil",
            lname:"mohammad",
            email:"mdzain@gmail.com",
            mobile:8856811999,
            address:"Gangakhed",
            isActive:true,
            occupation:"MERN STACK DEVELOPER"

        },
        {
            fname:"sumit",
            lname:"jondhale",
            email:"jondhalsumit@gmail.com",
            mobile:8985892354,
            address:"pune",
            isActive:false,
            occupation:"MERN STACK DEVELOPER"
        },
        {
            fname:"naveed",
            lname:"shaikh",
            email:"naveedshaikh@gmail.com",
            mobile:7056889712,
            address:"Bombay",
            isActive:false,
            occupation:"MERN STACK DEVELOPER"
        },
        {
            fname:"taufiq",
            lname:"pathan",
            email:"taufiqpathan@gmail.com",
            mobile:9186165756,
            address:"aundha",
            isActive:false,
            occupation:"MERN STACK DEVELOPER"
        },
        {
            fname:"shifa",
            lname:"khan",
            email:"shifakhan@gmail.com",
            mobile:7812546459,
            address:"parbhani",
            isActive:false,
            occupation:"MERN STACK DEVELOPER"
        },
        {
            fname:"saoud",
            lname:"shaikh",
            email:"soudshekh@gmail.com",
            mobile:7930879923,
            address:"Amravati",
            isActive:true,
            occupation:"MERN STACK DEVELOPER"

        },
        

    ]
    res.send(attuboss47)
})



const server=app.listen(6060,()=>{
    console.log("Top Floor Boys")
})
