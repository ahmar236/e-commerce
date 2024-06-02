import { ProductsModel } from "../../../backend/models"
import dbConnect from "../../../backend/dbConnect"

export default async function handler(req,res){


    await dbConnect()

    switch(req.method){
        case "GET":
            try {

                var products = await ProductsModel.find().populate("category","title")

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

            case "DELETE":
            try {

                const productId = req.query.productId;

                var deletedProduct = await ProductsModel.findByIdAndDelete(productId);


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

                var product = await ProductsModel.create(req.body)
                res.status(201).json({
                    success:true,
                    message:product
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