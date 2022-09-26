
import { dbConnect } from "../../../connect/dbconnect";
import Employee from "../../../model/Employee";
import { errorHandler,responseHandler } from "../../../util/common";


export default async function handler(req, res) {

  
      try {
  
      
        const {userId} = req.body;

        console.log('userId', userId)

        await dbConnect();     
         
        const emp = await Employee.aggregate([
            
            { 
              $match : { userId: require('mongoose').Types.ObjectId(userId)}
            },
            {
              $lookup: {
                  from: 'locations',
                  localField: '_id',
                  foreignField: 'empId',
                  as: 'locInfo'
              }
          },
                        
    
        ]).exec();


        if(emp){

         // res.status(200).json(loc)

             responseHandler(emp, res)

        }else{

            errorHandler("Something went wrong", res)

        }
      } catch (error) {

        errorHandler(error, res);

      }
    
  }
  