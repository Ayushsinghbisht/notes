
import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'
configDotenv()

export const DatabaseConnection = () => {

const mongodburi=process.env.MONGODB_URI
    try{

        mongoose.connect(mongodburi)
        console.log("connected to mongo db")
    }catch(err){
        console.log("err",err)

    }

 
}
