import { dbConnect } from "../../../connect/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import User from "../../../model/User";
import bcrypt from "bcrypt";


export default async function handler(req, res) {

    if (req.method !== "POST") {
  
      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {      

  
      try {

        const { bioId,fName,lName,designation,office,mobile,address,image,userId} = req.body;
         
        
        await dbConnect();
  
        const emp = new Employee({
        
          bioId:bioId,
          fName:fName,
          lName:lName,
          designation:designation,
          office:office,
          mobile:mobile,
          address:address,
          userId:userId,       
          image:image,
          
        });
  
      
        const saveEmp = await emp.save();
  
        if (saveEmp) {
         
          responseHandler(saveEmp, res);
          
        } else {
          errorHandler("Something went wrong", res);
        }

        
  


      } catch (error) {
        errorHandler(error, res);
      }
    }
  }



