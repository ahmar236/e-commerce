import mongoose from 'mongoose'


const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:String
},{timestamps:true})

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
        required:true
    },
    stock:{
        type:Number,
        default:0,
        required:true
    },
    price:{
        type:Number,
    },
    images:[
        {
            url:String,
            publicID:String,
            // isFeatureImage:Boolean
        }
    ],
    seo:{
        metaTitle:{
            type:String,
        },
        metaDesc:{
            type:String,
        },
        metaTags:[String]
    }
})

const CategoryModel = mongoose.models?.categories || mongoose.model("categories",categorySchema)
const ProductsModel = mongoose.models?.products || mongoose.model("products",productsSchema)



export {
    CategoryModel,
    ProductsModel
}