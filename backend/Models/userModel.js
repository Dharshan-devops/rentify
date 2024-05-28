const mongoose= require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim: true
    },
    lastName:{
        type:String,
        required:true,
        trim: true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
})

const User = mongoose.model('Users',userSchema)
module.exports = User