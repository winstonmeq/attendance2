
import { dbConnect } from "../../../connect/dbconnect";
import Employee from "../../../model/Employee";
import { errorHandler,responseHandler } from "../../../util/common";

// QUERY NA PARA SA ANDROID PHONE.. ................................ANG KAIBHANA NILA ANG JSON FILE.. WALA NA HANDLER

export default async function handler(req, res) {
     
      try {
  
        const { bId } = req.body;      
      
             
        console.log(bId)
        
        await dbConnect();     
         
        const getemp = await Employee.aggregate([
            
            { $match : { bioId: Number(bId)}},
                        
    
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
  
  