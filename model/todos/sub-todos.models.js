const  mongoose = require('mongoose');
 const subtodoschema =  new mongoose.Schema({
 }, {timestamps: true})
 export const subtodos = mongoose.model("subtodo" , schema);
