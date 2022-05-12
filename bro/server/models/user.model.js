//schema represents the structure of a particular document

const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
   
    password:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
  

    email:{

        type:String,
        required:true,
        trim:true , // removing the first space in value input   
        unique:true //

    },

    verified:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
    code:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
    position:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
  
    date:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
    totalInvestment:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },








},{timestamps:true})// date  and time of the data being passed


const User= mongoose.model('user',userSchema);

module.exports = User;