
import { dbConnect } from "../../../connect/dbconnect";
import Location from "../../../model/Location";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {
    if (req.method !== "POST") {

      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {empId} = req.body;

        console.log("mobile query empId", empId)
  
        await dbConnect();     
         
        const loc = await Location.aggregate([
            
            { 
              $match : { empId: require('mongoose').Types.ObjectId(empId)}
          
           },
           { $project: { "_id": 1, "locName": 1, "latitude": 1, "longitude": 1, "radius": 1, "empId": 1, "userId":1  } }
                        
    
        ]).exec();


        if(loc){

          res.status(200).json(loc)

            // responseHandler(loc, res)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    }
  }
  