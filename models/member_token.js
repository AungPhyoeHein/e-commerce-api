const mongoose = require('mongoose');

const memberTokenSchema = mongoose.Schema({
    key:  {
        type:String,
        required: true,
    },
    page_id: {
        type:String,
        required: true,
    },
    exprie_date:{
        type:String,
        required: true,
    }
},
{
    timestamps: true,
})

const MemberToken = mongoose.model('MemberToken',memberTokenSchema);

module.exports = MemberToken;