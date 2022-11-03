const express= require('express')
const app = express()
const port = process.env.PORT || 5000
const Register=require("./models/registers")
const {maill}=require("./mail")
require("./db/conn")
 const path = require('path')
 const hbs = require('hbs')
const e = require('express')
 const templatePath=path.join(__dirname,"../templates/views")
 const partialsPath=path.join(__dirname,"../templates/partials")
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))
 app.set("view engine", "hbs")
 app.set("views",templatePath)// ab ham ye bata rahe iske through k jo views folder tha uske badle ye hai
 hbs.registerPartials(partialsPath)

 app.get("/",(req,res)=>{
    res.render("registers")
 })
 app.get("/login",(req,res)=>{
   res.render("login")
})
app.get("/forgot",(req,res)=>{
   res.render("forgot")
})
app.post("/register",async (req, res)=>{
 try{
console.log(req.body.name)
//  const name=req.body.name
 const registerEmployee=new Register({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
 })
 let enteredemail=req.body.email
 var otp=Math.ceil(Math.random()*1000)
 maill(`your otp is ${otp}`,enteredemail)
//  const registered=await registerEmployee.save()
 res.status(201).render("verify")
 app.post("/verify",async (req,res)=>{
   let enteredemail=req.body.email
  let pass=req.body.pass
if(pass==otp){
   const registered=await registerEmployee.save()
   res.render("login")
}
else{
   res.send("otp did not match")
}

})
 }


 catch(err){
res.status(400).render("err",{error:err})
 }
})
//login
app.post("/login",async (req,res)=>{
   logemail=req.body.email
   logpassword=req.body.password//
   dataindatabse=await Register.findOne({email:logemail})//an object will be found whose name will be dataindatabasee(if found)
  if(!dataindatabse){
   res.render("err2")
  }
  else if (logpassword==dataindatabse.password ){
 res.render("index")
  }
  else{
   res.render("err3")
  }
})

app.post("/forgot",async (req,res)=>{
   let enteredemail=req.body.email
  const edata=await Register.findOne({email:enteredemail})
  if(!edata){
   res.send("oops you are not registerd use")
  }
  else{
   maill(`your password is ${edata.password}`,enteredemail)
   
     res.render("login")
  }

})
app.listen(port,()=>console.log("listening at port",port))