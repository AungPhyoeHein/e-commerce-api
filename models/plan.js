const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
    title:  {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
    },
    discount_price: {
        type:Number,
    },
    description:{
        type:String,
        required:true,
    },
},
{
    timestamps: true,
})

const Plan = mongoose.model('Plan',planSchema);

module.exports = Plan;