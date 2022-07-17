const mongoose=require('mongoose');
const feedbaackSchema=mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    comment:{
        type:String,
    },
    email:{
        type:String,
    },
    country:{
        type:String,
    },
    phoneNo:{
        type:String,
    }
})
module.exports=mongoose.model('feedback',feedbaackSchema)