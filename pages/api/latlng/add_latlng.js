
import { dbConnect } from "../../../connect/dbconnect";
import Latlng from "../../../model/Latlng";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {
    if (req.method !== "POST") {
  
      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  
        const {Name,lat,lng,rad,userId} = req.body;
  
        await dbConnect();   
  
        const latlng_data = new Latlng({
          locName:Name,
          latitude:lat,
          longitude:lng,
          radius:rad,
          userId: userId               
        });
  
        const save_latlng = await latlng_data.save();  
     
  
        if (save_latlng) {
     
          responseHandler(save_latlng, res, 201);
  
        
          
        } else {
          errorHandler("Something went wrong", res);
        }
      } catch (error) {
        errorHandler(error, res);
      }
    }
  }
  