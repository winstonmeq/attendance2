
import { Double } from "mongodb";
import mongoose from "mongoose";

const TravelSchema = mongoose.Schema({        

  
   
    lat: {
        String:Double,
    },

    lng: {
        String:Double,   

    },

    timelog:{
        type:String,

    },
    image:{
        type:String,
        trim:true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },

    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",        
    },


},{

    timestamps: true,

});



export default mongoose.models.Travel || mongoose.model('Travel', TravelSchema);