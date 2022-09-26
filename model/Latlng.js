
import mongoose from "mongoose";

const LatlngSchema = mongoose.Schema({
    
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

     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },


},{

    timestamps: true,

});



export default mongoose.models.Latlng || mongoose.model('Latlng', LatlngSchema);