
import { Double } from "mongodb";
import mongoose from "mongoose";

const AttendanceSchema = mongoose.Schema({    
    

   
    totalmin: {
        type:Number,     

    },
    day: {
        type:Number,
    },
    month: {
        type:Number, 
    
    },
    year: {
        type:Number,
    },

    timeIn: {
        type:String,
    },

    timeOut: {
        type:String,
    },

    lat: {
        type:Double,
    },

    lng: {
        type:Double,   

    },

    timelog:{
        type:String,

    },
    image:{
        type:String,
        trim:true
    },

    locId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",   
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



export default mongoose.models.Attendance || mongoose.model('Attendance', AttendanceSchema);