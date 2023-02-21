import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
       // _id:{type:String}, 
       categoryName: {type:String, required:true, unique:true, }, 
       categoryImg: {type:String, required:true,   }, 
    },
    {
        timestamps:true
    }
);

const Categories = mongoose.model('categories', productSchema);
export default Categories;