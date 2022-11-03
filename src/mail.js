var nodemailer=require("nodemailer")
const maill=(m)=>{
var transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"arifahd92@gmail.com",
        pass:"plstrmpwsooozrwi"
    }
})

    
var mailOptions={
    from:"arifahd92@gmail.com",
    to:"mdarif7312@gmail.com",
    subject:"helo from nodemailr",
    text:m
}
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`email sent:`)
    }
})}
// mail("hi arif how r you")
module.exports={maill}
