
import { dbConnect } from "../../../connect/dbconnect";
import Location from "../../../model/Location";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {
    if (req.method !== "POST") {

      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {userId} = req.body;
  
        await dbConnect();     
         
        const _list = await Location.aggregate([
            
            { $match : { userId: require('mongoose').Types.ObjectId('631ad70c7d662c9bacd2654d')}},
                        
    
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
  