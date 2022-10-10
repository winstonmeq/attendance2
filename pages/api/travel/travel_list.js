import { dbConnect } from "../../../connect/dbconnect";
import Travel from "../../../model/Travel";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {
    if (req.method !== "POST") {

      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {userId} = req.body;
  
        await dbConnect();     
         
        const trav = await Travel.aggregate([
            
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


        if(trav){

             responseHandler(trav, res)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    }
  }
  