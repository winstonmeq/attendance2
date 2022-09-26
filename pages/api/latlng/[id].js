
import { dbConnect } from "../../../connect/dbconnect";
import Latlng from "../../../model/Latlng";
import { errorHandler,responseHandler } from "../../../util/common";

export default async function handler(req, res) {


  try {

    const { id } = req.query;

    await dbConnect();

    console.log('id',id)
   
    const _list = await Latlng.aggregate([
            
        { $match : { _id: require('mongoose').Types.ObjectId(id)}},
                    

    ]).exec();

    if (_list) {

      responseHandler(_list, res);

    } else {

      errorHandler("Something went wrong", res);
      
    }
  } catch (error) {
    errorHandler(error, res);
  }
}
