
import { dbConnect } from "../../../connect/dbconnect";
import Attendance from "../../../model/Attendance";
import { errorHandler,responseHandler } from "../../../util/common";



export default async function handler(req, res) {

  if (req.method !== "POST") {

    errorHandler("Invalide Request Type is not a POST", res);

  } else {      


    try {

      
        const {empId,totalmin,timeIn,timeOut,day,month,year,lat,lng,datetime,image,locId,userId} = req.body;
         
  

      await dbConnect();

      const att = new Attendance({
        empId:empId,
        totalmin:totalmin,
        timeIn:timeIn,
        timeOut:timeOut,
        day:day,
        month:month,
        year:year,
        lat:lat,
        lng:lng,
        datetime:datetime,
        locId:locId,
        image:image,
        userId:userId
       
      });

    
      const saveAtt = await att.save();

      if (saveAtt) {
       

        res.status(200).json(saveAtt)
        
      } else {
        errorHandler("Something went wrong", res);
      }

     // }

    }catch(error){
      errorHandler(error, res);
    }

  }
}

  
