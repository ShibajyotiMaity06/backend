const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim : true,
        minLength:4
    },
    email : {
        type : String , 
        required : true,
        unique:true,
        lowerCase:true
    },
    password : {
        type : String , 
        minLength:5,
        maxLength:10,
        required:true
    }
})

module.exports = mongoose.model('User', UserSchema)