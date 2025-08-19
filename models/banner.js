const mogoose = require('mongoose');

const bannerSchema =mogoose.Schema({
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

const Banner = mogoose.model('banners',bannerSchema);

module.exports = Banner;