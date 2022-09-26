
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    
    

    email: {
        type:String,
        required:true,        
        index: true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        trim:true

    },
    image:{
        type:String,
        required:true,      
        trim:true
    },

    userlevel:{
        type:Number, 
        index:true,            
        trim:true
    }

},{

    timestamps: true,

});



export default mongoose.models.User || mongoose.model('User', UserSchema);