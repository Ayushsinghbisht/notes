import books from "../Models/BookstoreModel.js";

export const getBooks=async(req,res)=>{

    try{
        const book=await books.find()
        res.status(200).json(book)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

}

