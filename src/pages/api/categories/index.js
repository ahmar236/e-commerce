import { CategoryModel } from "../../../backend/models"
import dbConnect from "../../../backend/dbConnect"


export default async function handler(req,res){


    await dbConnect()

    switch(req.method){
        case "GET":
            try {

                var categories = await CategoryModel.find()

                res.send({
                    sucess:true,
                    message:categories
                })

                
            } catch (error) {
                res.status(500).json({
                    success:false,
                    message:error.message
                })
            }
            break


            case "DELETE":
                try {
    
                    var products = await CategoryModel.findByIdAndDelete(req.body)
    
                    res.send({
                        sucess:true,
                        message:products
                    })
    
                    
                } catch (error) {
                    res.status(500).json({
                        success:false,
                        message:error.message
                    })
                }
                break
            
            

        case "POST":
            try {

                var category = await CategoryModel.create(req.body)
                res.status(201).json({
                    success:true,
                    message:category
                })

                
            } catch (error) {

                if(error.code == 11000){
                    res.status(409).json({
                        success:false,
                        message:"Title is Already in use!"
                    })
                    return
                }

                res.status(500).json({
                    success:false,
                    message:error.message
                })
                
            }



    }    
}