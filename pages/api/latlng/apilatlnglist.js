
import { dbConnect } from "../../../connect/dbconnect";
import Latlng from "../../../model/Latlng";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {
    if (req.method !== "POST") {

      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {userId} = req.body;
  
        await dbConnect();     
         
        const _list = await Latlng.aggregate([
            
            { $match : { userId: require('mongoose').Types.ObjectId(userId)}},
                        
    
        ]).exec();


        if(_list){


             responseHandler(_list, res)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    }
  }
  