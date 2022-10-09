
import { dbConnect } from "../../../connect/dbconnect";
import Attendance from "../../../model/Attendance";
import { errorHandler,responseHandler } from "../../../util/common";

// QUERY NA PARA SA ANDROID PHONE.. ................................ANG KAIBHANA NILA ANG JSON FILE.. WALA NA HANDLER

export default async function handler(req, res) {
     
      try {
  
        const { empId } = req.body;      
      
             
        console.log(empId)
        
        await dbConnect();     
         
        const getemp = await Attendance.aggregate([
            
            { $match : { empId: require('mongoose').Types.ObjectId(empId)}, $group: {month:10}},
                        
    
        ]).exec();

        console.log(getemp)

        if(getemp){        

            res.status(200).json(getemp)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    }
  
  