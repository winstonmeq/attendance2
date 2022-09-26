import { dbConnect } from "../../../connect/dbconnect";
import Attendance from "../../../model/Attendance";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {
    if (req.method !== "POST") {

      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {userId} = req.body;
  
        await dbConnect();     
         
        const att = await Attendance.aggregate([
            
            { 
              $match : { userId: require('mongoose').Types.ObjectId(userId)},
            },
            {
                $lookup: {
                    from: 'employees',
                    localField: 'empId',
                    foreignField: '_id',
                    as: 'empInfo'
                }
            },
                        
    
        ]).exec();


        if(att){

             responseHandler(att, res)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    }
  }
  