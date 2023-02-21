import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
       // _id:{type:String}, 
       slideImg: {type:String },  
    } 
);

const Slides = mongoose.model('slides', productSchema);
export default Slides;