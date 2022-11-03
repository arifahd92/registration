const mongoose=require("mongoose")
mongoose.connect("mongodb://mongo:IHhLpn6x6qEBytqMHP2g@containers-us-west-67.railway.app:5593")
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err))
