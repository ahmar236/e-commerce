import { ProductsModel } from "../../../backend/models";
import dbConnect from "../../../backend/dbConnect";

export default async function handler(req, res) {
    await dbConnect()

    switch (req.method) {
        case"GET":
            try {
                var products = await ProductsModel.find()
                res.send({
                    success:true,
                    message:products,
                })


            } catch (error) {
                res.status(500).json({
                    success:false,
                    massage:error.message,
                })
            }
            break;
        case "POST":
            try {
                const product= await ProductsModel.create(req.body)

                res.json({
                    success:true,
                    message:product
                })

            } catch (error) {

                if(error.code == 11000){
                    res.status(409).json({
                        success:false,
                        message:"title is already in use!"
                    })
                    return
                }
                res.status(500).json({
                    success:false,
                    massage:error.message
                })

                break;

            }



    }
}