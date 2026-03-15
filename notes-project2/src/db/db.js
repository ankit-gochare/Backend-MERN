const mongoose = require('mongoose')

async function ConnectDB(){
    await mongoose.connect("");
    console.log("Connected to DB");
}

module.exports = ConnectDB