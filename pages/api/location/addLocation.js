
import { dbConnect } from "../../../connect/dbconnect";
import Location from "../../../model/Location";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {
    if (req.method !== "POST") {
  
      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {
  
      try {
  

        const {locName,latitude,longitude,radius,empId,userId} = req.body;
  
        await dbConnect();   
  
        const loc = new Location({
          locName:locName,
          latitude:latitude,
          longitude:longitude,
          radius:radius,
          empId:empId,
          userId:userId             
        });
  
        const saveLoc = await loc.save();  
     
  
        if (saveLoc) {
     
          responseHandler(saveLoc, res, 201);
  
          dbConnect.close();
          
        } else {
          errorHandler("Something went wrong", res);
        }
      } catch (error) {
        errorHandler(error, res);
      }
    }
  }
  