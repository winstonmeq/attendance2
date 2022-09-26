
import mongoose from "mongoose";

const OfficeSchema = mongoose.Schema({    
    

    officeName: {
        type:String,
       

    },
    officeHead: {
        type:String,
    

    },
    officeAdd: {
        type:String,
    

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



export default mongoose.models.Office || mongoose.model('Office', OfficeSchema);