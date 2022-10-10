
import { dbConnect } from "../../../connect/dbconnect";
import Travel from "../../../model/Travel";
import { errorHandler,responseHandler } from "../../../util/common";



export default async function handler(req, res) {

  if (req.method !== "POST") {

    errorHandler("Invalide Request Type is not a POST", res);

  } else {      


    try {

      
        const {empId,lat,lng,timelog,image,userId} = req.body;
         
  

      await dbConnect();

      const trav = new Travel({
        empId:empId,
        lat:lat,
        lng:lng,
        timelog:timelog,
        image:image,
        userId:userId
       
      });

    
      const saveTravel = await trav.save();

      if (saveTravel) {
       

        res.status(200).json(saveTravel)
        
      } else {
        errorHandler("Something went wrong", res);
      }

     // }

    }catch(error){
      errorHandler(error, res);
    }

  }
}

  
