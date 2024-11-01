const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[3,"Username muste be at least 3characters long"]
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[11,"Email muste be at least 11 characters long"]

    },
    password:{ 
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[5,"Password muste be at least 13 characters long"]},
})

const user = mongoose.model('user',userSchema)

module.exports =user