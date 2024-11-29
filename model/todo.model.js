const mongoose =require('mongoose');
const { type } = require("os");
const userSchema=mongoose.Schema({
    text:{
        type: string,
        required: true,
    },
    status:{
        type: string,
        default: "not Done",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
});
module.exports=mongoose.model("Todo", Todoschema);