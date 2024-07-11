
import users from "../Models/UserModel.js"
import bodyParser from "body-parser"
import bcrypt  from "bcrypt"



export const signup=async (req,res)=>{
    try{
        // console.log(req.body)
        let {fullname,email,password}=req.body
        const user=await users.findOne({email})
        
        if(user){
            return res.status(400).json({message:`already exists ${user.email}`})
        }

            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(password,salt,async(error,hashpassword)=>{
                 const User=   await users.create({"fullname":fullname,"email":email,"password":hashpassword})
            return res.status(200).json({message:`${User} created`})
                })
            })

    }catch(Err){
        console.log(Err)
    }


}



export const login=async(req,res)=>{

    try{
        
        let {email,password}=req.body
       
        const user=await users.findOne({email})
       console.log(user)
         bcrypt.compare(password,user.password,(err,result)=>{
            console.log(result)
            if(!result || !user ){
                console.log("user not exits")
                return res.status(400).json("user not exist")
            }

            return res.status(200).json({message:"succesfull",
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email
                }
        })
        })


    }catch(error){
        console.log(error)
        return res.status(400).json({message: `${error}`})
    }

}