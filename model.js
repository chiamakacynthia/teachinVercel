const mongoose = require("mongoose")


const model = mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    }
})

module.exports = mongoose.model("sign in", model)