const  mongoose = require('mongoose');
 const todoschema =  new mongoose.Schema({
    content: {
        type : String,
        required: true
    },
    CreatedBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    subtodo: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "subtodo"
    }
 }, {timestamps: true})
 export const todo = mongoose.model("Todo" , schema);
