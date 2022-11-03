const express= require("express")
const  mongoose = require("mongoose")
const playlistSchema=new mongoose.Schema({
    name:String,
    email:
    {type:String,required:true},
    password:String
})
const Register=new mongoose.model("register",playlistSchema)
module.exports=Register