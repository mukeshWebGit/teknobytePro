import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
    { 
        orderItems: [
            {   slug: {type:String, required:true,  index: true, unique:true},
                name: {type:String, required:true, unique:true, }, 
                image: {type:String, required:true},
                quantity: {type:String, required:true},
                price: {type:Number, required:true},
                colorName: {type:String},
                product: {type:mongoose.Schema.Types.ObjectId, ref:'product', required:true},
            }
        ],
        shippingAddress:{
            fullName: {type:String, required:true},
            address: {type:String, required:true},
            city: {type:String, required:true},
            pinCode: {type:String, required:true},
        },
        paymentMethod:{type:String, required:true},
        paymentResult:{
            id:String,
            status:String,
            update_time:String,
            email_address:String,

        },
        itemsPrice: { type: Number, required: true },
        shippingPrice: { type: Number, required: true },
        taxPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        isPaid: { type: Boolean, default: false },
        paidAt: { type: Date },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date },
    },
   
    {
        timestamps:true,
    }
);

const Order = mongoose.model('order', orderSchema);
export default Order;