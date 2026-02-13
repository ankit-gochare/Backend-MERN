const mongoose = require('mongoose')

async function ConnectDB(){
    await mongoose.connect("mongodb+srv://notes_user01:0OQeDRpv2wTghbz0@backend-ankur.6qvuswk.mongodb.net/notes2");
    console.log("Connected to DB");
}

module.exports = ConnectDB