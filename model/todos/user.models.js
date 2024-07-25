const  mongoose = require('mongoose');
 const schema =  new mongoose.Schema({
    username: {
        type: String,
        required : true,
        unique : true,
        
    },
    email : {
        type : String,
        unique: true
    },
    


 }, {timestamps: true})
 export const user = mongoose.model("User" , schema);
