const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    key:  {
        type:String,
        required: true,
    },
    page_id: {
        type:String,
        required: true,
    },
    user_id:{
        type:String,
        required: true,
    }
},
{
    timestamps: true,
})

const Member = mongoose.model('Member',memberSchema);

module.exports = Member;