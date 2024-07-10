import mongoose from "mongoose";



const bookStoreSchema=mongoose.Schema({
name:String,
title:String,
price:{type:Number},
category:String,
image:String,
})

const books=mongoose.model("books",bookStoreSchema)
export default books



