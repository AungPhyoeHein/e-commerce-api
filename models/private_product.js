const mongoose = require('mongoose');

const privateProductSchema = mongoose.Schema({
    page_id: {
        type:String,
        required: true,
    },
    title:{
        type:String,
        required: true,
    },
    images:[
        {
            type:String,
            required:true,
        }
    ],
    description:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    subcategory:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required:true,
    },
    size:[
        {
            type:String,
        }
    ],
    colors:[
        {
            type:String,
        }
    ],
    tags:[
        {
            type:String,
        }
    ],
},
{
    timestamps: true,
})

const PrivateProduct = mongoose.model('PrivateProduct',privateProductSchema);

module.exports = PrivateProduct;