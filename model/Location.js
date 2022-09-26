
import mongoose from "mongoose";

const LocationSchema = mongoose.Schema({
    
    locName:{
        type:String,
        required:true,
        trim:true
    },    
    latitude:{
        type:Number,
        required:true,
        trim:true

    },
    longitude:{
        type:Number,
        required:true,      
        trim:true
    },
    
    radius:{
        type:Number,
        required:true,      
        trim:true
    },

    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",        
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },



},{

    timestamps: true,

});



export default mongoose.models.Location || mongoose.model('Location', LocationSchema);