const mongoose = require('mongoose');

const privateAccessSchema = mongoose.Schema({
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

const PrivateAccess = mongoose.model('privateaccess',memberSchema);

module.exports = PrivateAccess;