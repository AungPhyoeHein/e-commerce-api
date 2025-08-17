const mogoose = require('mongoose');

const pageBannerSchema =mogoose.Schema({
    page_id:{
        type:String,
        required: true,
    },
    link:{
        type:String,
        required:true,
    },
    image: {
        type:String,
        required:true,
    }
},
{
    timestamps: true,
})

const PageBanner = mogoose.model('PageBanner',pageBannerSchema);

module.exports = Page;