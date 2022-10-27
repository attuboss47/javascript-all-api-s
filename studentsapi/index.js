const express =require("express")
const cors=require("cors")
const { json } = require("body-parser")
const app=express()
// const studentinfo=require("studentinfo")
app.use(cors())
app.use(json())



app.get("/",(req,res)=>{
res.send("Hii zeeshan bhai")
})
app.get("/batch",(req,res)=>{
    res.send("zeshan bhai is very good person  & very talented guy ")
})
app.get("/allusers",(req,res)=>{
    const obj = {
        data: [
        {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
        },
        {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
        }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
        }
        },
        {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
        }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
        }
        },
        {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
        }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
        }
        }
        ]
        }
        res.send(obj)
})
app.get("/devices",(req,res)=>{
 const devices=[
    {
        name:"dynabook",
        model:"d205",
        made:"toshiba",
        make:2019,
        isActive:true
    },
    {
        name:"realme 8",
        model:"r8",
        made:"samsung",
        make:2012,
        isActive:false

    },
    {
        name:"gadget123",
        model:"d222",
        made:"Godrej",
        make:2023,
        isActive:true

    },
    {
        name:"redmi 8",
        model:"r8",
        made:"miui",
        make:202,
        isActive:true

    },
 ]
 res.json(devices)
})
app.post("/devices",(req,res)=>{
 const devices=[
    {
        name:"dynabook",
        model:"d205",
        made:"toshiba",
        make:2019,
        isActive:true
    },
    {
        name:"realme 8",
        model:"r8",
        made:"samsung",
        make:2012,
        isActive:false

    },
    {
        name:"gadget123",
        model:"d222",
        made:"Godrej",
        make:2023,
        isActive:true

    },
    {
        name:"redmi 8",
        model:"r8",
        made:"miui",
        make:202,
        isActive:true

    },
 ]
 const filtered=devices.filter(item=> item.isActive===req.isActive)

 res.json(filtered)
})








const server=app.listen(8080,()=>{
    console.log("server is running on 8080 port")
})