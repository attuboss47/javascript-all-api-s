// const express =require("express")
// const {json} =require("express")
// const email=require("./template")


// const app=express()
// app.use(json())


// app.get("/",(req,res)=>{
//     res.send("hello")
// })
// app.get("/all",(req,res)=>{
//     res.send("All fencing available here!!!!")
// })
// app.post("/rect",(req,res)=>{
//     const {l,b,layer,rate}=req.body;
//     const cost =(l+b+l+b)*layer*rate;
//     res.json({cost})

// })
// app.post("/poly",(req,res)=>{
//     const {data,rate,layer}=req.body;  //Object destructut=ring
//     const param=data.reduce((acc,cur)=>acc+cur);
//     const cost =param*rate*layer;
//     res.json({cost})
// })
// app.post ("/tri",(req,res)=>{
//     const {a,b,c,layer,rate}=req.body;
//     const param=a+b+c;
//     const cost=param*rate*layer;
//     res.json({cost})

// })
// app.post("/elec",(req,res)=>{
//     const {nos,hrs,mil,rate}=req.body;
//     const cost=Math.round(nos*hrs*mil*rate*30)
//     res.json({cost})
// })
// app.post("/avgcost",(req,res)=>{
//     const {nos,dist,mil,rate}=req.body;
//     const cost=Math.round(nos*dist*mil*rate)
//     res.json({cost})
// })
//  app.post("/memo",(req,res)=>{
//     const {data}=req.body;
//     const totalSubjects=data.length;
//     const totalMarks=data.reduce((acc,cur)=>acc+cur)
//     const percentage=totalMarks/totalSubjects;
//     res.json({totalMarks,totalSubjects,percentage})

//     })
//  app.post("/testmemo",(req,res)=>{
//     const {data,max}=req.body;
//     const totalMarks=data.reduce((acc,cur)=>acc+cur)
//     const totalSubjects=data.length;
//     const totalMax=totalSubjects*max;
//     const percentage=(totalMarks/totalMax)*100;
//     res.json({totalMarks,totalSubjects,totalMax,percentage})
//  })

//     app.post("/authtoken",(req,res)=>{
//         const {otp, otptoken}= req.body;
//         const jwt_security_key="pickupBizAuthMechanism";
//         const decodeHeader = jwt_decode(otptoken,{payload: true});
//         if(decodeHeader.otp===otp){
//             const token = jwt.sign(decodeHeader, jwt_security_key)
//             res.json({token});
//         }else{
//             res.send("Please enter the correct OTP");
//         }
//     }
//     app.post("/auth",(req,res)=>{
//         const user={
//             userName:"admin",
//             password:"!ndi@n"
//         }
//         const {userName,password}=req.body;
//         if(user.userName===userName && user.password===password){
//             const otp=Math.floor(1000+Math.random()*9000);
//             const payload={userName,otp};
//             const jwt_security_key="pickupBizAuthMechanism";
//             const otptoken=jwt.sign(payload,jwt_security_key);
//             res.json({otp,otptoken})
//         }else{
//             res.send("Please check your userName or Password...!")
//         }
//     })
//  app.post("/enggmemo",(req,res)=>{
//     const{data,max}=req.body;
//     const totalMarks=data.reduce((acc,cur)=>acc+cur);
//     const totalMax=max.reduce((acc,cur)=>acc+cur);
//     const percentage=(totalMarks/totalMax)*100
//     res.json({totalMarks,totalMax,percentage})
//  })
// //  app.post("/email",(req,res)=>{
// //     const {emailTo, emailCC, sub, emailbody, greet, sign} = req.body;
// //     const emailData=email
// //     .replace("{{emailTo}}",emailTo)
// //     .replace("{{emailCC}}",emailCC)
// //     .replace("{{sub}}",sub)
// //     .replace("{{emailbody}}",emailbody)
// //     .replace("{{greet}}",greet)
// //     .replace("{{sign}}",sign)
// //     res.json({emailData})
// //  })
// app.post("/email", (req, res) => {
//     const { emailTo, emailCC, sub, emailbody, greet, sign } = req.body;
//     const emailData = email
//       .replace("{{emailTo}}", emailTo)
//       .replace("{{emailCC}}", emailCC)
//       .replace("{{sub}}", sub)
//       .replace("{{emailbody}}", emailbody)
//       .replace("{{greet}}", greet)
//       .replace("{{sign}}", sign);
//     res.json({ emailData });
//   });



// const server=app.listen(3030,()=>{
//     console.log("service is running on 3030 port")   
// })


const express = require("express");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const email= require("./template");
const jwt_decode= require("jwt-decode");
const app= express();

app.use(json());

app.get("/",(req,res)=>{
    res.send("Fencing app is ready");
})

app.post ("/bankaccno",(req,res)=>{
    const jwt_security_key = "PickupBizBankApp";
    const {token}= req.body;
    const verified = jwt.verify(token,jwt_security_key);
    if(verified){
        res.send("80099114578");
    } else{
        res.send("Not Valid request...");    }
})

app.post ("/creditcard",(req,res)=>{
    const jwt_security_key = "PickupBizBankApp";
    const {token}= req.body;
    const verified = jwt.verify(token,jwt_security_key);
    if(verified){
        res.send("444455556666");
    } else{
        res.send("Invalid request...");    }
})

app.post ("/gettoken",(req,res)=>{
    const jwt_security_key = "PickupBizBankApp";
    const {userId,fname,lname,city}=req.body;
    const payload = {userId,fname,lname,city};
    const token = jwt.sign(payload, jwt_security_key);
    res.json({token});
})

app.post ("/email",(req,res)=>{
    const {emailTo, emailCC, sub, emailbody, greet, sign} = req.body;
    const emailData= email.replace("{{emailTo}}",emailTo)
    .replace("{{emailCC}}",emailCC)
    .replace("{{sub}}",sub)
    .replace("{{emailbody}}",emailbody)
    .replace("{{greet}}",greet)
    .replace("{{sign}}",sign);
    res.json({emailData});
})

app.get("/all",(req,res)=>{
    res.send("All fencing available here!!!")
});

app.post ("/rect",(req,res)=>{
    const {l,b,layer,rate}=req.body;
    const cost = (l+b+l+b)*layer*rate;
    res.json({cost});
})



app.post ("/tri",(req,res)=>{
        const {a,b,c,layer,rate}= req.body;
        const param= a+b+c;
        const cost= param*rate*layer;
        res.json({cost});
    })
    
    app.post("/poly",(req,res)=>{
        const {data,rate,layer}=req.body;           //object distructuring
        const param= data.reduce((acc,cur)=>acc+cur);
        const cost = param*rate*layer;
        res.json({cost});
    })
    
    app.post("/elec",(req,res)=>{
        const {nos, hrs,mil,rate}=req.body;
        const cost = Math.round(nos*hrs*mil*rate*30);
        res.json({cost});
    });
    
    app.post("/avgcost",(req,res)=>{
        const {nos, dist,mil,rate}=req.body;
        const cost = Math.round(nos*dist*mil*rate);
        res.json({cost});
    });
    
    app.post ("/markmemo",(req,res)=>{
        const {data}= req.body;
        const totalSubjects = data.length;
        const totalMarks = data.reduce((acc,cur)=>acc+cur);
        const percentage = Math.round(totalMarks/totalSubjects);
        res.json({totalMarks,totalSubjects,percentage});
    })
    
    app.post("/authtoken",(req,res)=>{
        const {otp, otptoken}= req.body;
        const jwt_security_key="pickupBizAuthMechanism";
        const decodeHeader = jwt_decode(otptoken,{payload: true});
        if(decodeHeader.otp===otp){
            const token = jwt.sign(decodeHeader, jwt_security_key)
            res.json({token});
        }else{
            res.send("Please enter the correct OTP");
        }
    })
    
    app.post("/auth",(req,res)=>{
        const user={
            userName:"admin",
            password:"!ndi@n"
        }
        const {userName,password}=req.body;
        if(user.userName===userName && user.password===password){
            const otp=Math.floor(1000+Math.random()*9000);
            const payload={userName,otp};
            const jwt_security_key="pickupBizAuthMechanism";
            const otptoken=jwt.sign(payload,jwt_security_key);
            res.json({otp,otptoken})
        }else{
            res.send("Please check your userName or Password...!")
        }
    })
    
    app.post ("/memo",(req,res)=>{
        const {data, max}= req.body;
        const totalMarks = data.reduce((acc,cur)=>acc+cur);
        const totalSubjects = data.length;
        const totalMax = totalSubjects*max;
        const percentage = (totalMarks/totalMax)*100;
        res.json({totalMarks,totalSubjects,totalMax,percentage});
    })
    
    app.post ("/enggmemo",(req,res)=>{
        const {data,max}=req.body;
        const totalMarks = data.reduce((acc,cur)=>acc+cur);
        const totalMax = max.reduce((acc,cur)=>acc+cur);
        const percentage = (totalMarks/totalMax)*100;
        res.json({totalMarks,totalMax,percentage});
    })
    
    const server = app.listen(3030,()=>{
        console.log("Service is Up and running on 3030 port");
    });
    