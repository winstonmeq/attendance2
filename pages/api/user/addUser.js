import { dbConnect } from "../../../connect/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import User from "../../../model/User";
import bcrypt from "bcrypt";


export default async function handler(req, res) {

    if (req.method !== "POST") {
  
      errorHandler("Invalide Request Type is not a POST", res);
  
    } else {      

  
      try {

      const { email,password,image} = req.body;

      console.log('paylod',email,password,image)

      const hashPassword = await bcrypt.hash(password, 8);

      await dbConnect();   


      const user = new User({
        email: email,
        password: hashPassword,
        image:image,
        userlevel: 0
      });

      const saveUser = await user.save();
  
      if (saveUser) {

        const userDoc = saveUser._doc;
        delete userDoc.password;

        responseHandler(saveUser, res, 200);
        
        
      } else {
        errorHandler("Something went wrong", res);
      }
        
  


      } catch (error) {
        errorHandler(error, res);
      }
    }
  }



