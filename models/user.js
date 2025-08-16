const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type:String,
        required:true,
        trim: true,
    },

    email: {
        type:String,
        required: true,
        trim: true,
        unique:true,
        validate: {
            validator: (value)=> {
                //email validate 
                const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return result.test(value);
            },
            message : "Please enter a valid email address",
        }
    },

    phone: {
        type: String,
        default: "",
        trim: true,
    },

    bio:{
        type:String,
        default:"",
    },

    role: {
        type: String,
        enum: ['OWNER','ADMIN','USER'],
        default: 'USER',
    },

    state: {
        type:String,
        default: "",
    },

    city: {
        type:String,
        default: "",
    },

    locality: {
        type:String,
        default: "",
    },

    password: {
        type:String,
        required: true,
        minlength:6,
        validate: {
            validator: (value)=>{
                //check if password is at least 8 characters long.
                return value.length > 6;
            },
            message : "Password must be at least 8 characters long",
        }
    }
    
},{
    timestamps:true,
})

const User = mongoose.model('User',userSchema);

module.exports = User;

