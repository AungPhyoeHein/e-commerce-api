const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user_id:  {
        type:String,
        required: true,
    },
    cart_id:  {
        type:String,
        required: true,
    },
    total_price:{
      type: Number,
      required:true,
    },
    discount_price: {
        type:Number,
    },
},
{
    timestamps: true,
})

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;