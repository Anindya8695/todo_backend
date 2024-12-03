const mongoose =require('mongoose');
const { type } = require("os");
const Todoschema=mongoose.Schema({
    text:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: "not Done",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
});
module.exports=mongoose.model("Todo", Todoschema);