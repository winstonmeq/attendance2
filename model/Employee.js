
import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({    
    

    bioId: {
        type:Number,
        unique:true

    },
    fName: {
        type:String,
        

    },
    lName: {
        type:String,
      

    },
    designation: {
        type:String,
       

    },
    office: {
        type:String,
    

    },
    mobile: {
        type:String,
      

    },
  
    address: {
        String:String,
    },

  
    image:{
        type:String,
        trim:true
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },




},{

    timestamps: true,

});



export default mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema);