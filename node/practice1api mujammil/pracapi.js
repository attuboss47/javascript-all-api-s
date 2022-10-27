const express = require("express")
const app=express();


 app.get("/",(req,res)=>{
    res.send("hello this is completed");
  });

const server=app.listen(5050,()=>{
  console.log("server is running on port-50");
});
