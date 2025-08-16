const mongoose = require("mongoose");
const {db_url} = require("../configs/keys.js")

const connectMongodb = async() => {
    try {
        await mongoose.connect(db_url);
        console.log('[+] Database connected.')
    } catch (err) {
        
    }
}

module.exports = connectMongodb;