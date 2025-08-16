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
})

const Banner = mogoose.model('Banner',bannerSchema);

module.exports = Banner;