
import { dbConnect } from "../../../connect/dbconnect";
import Latlng from "../../../model/Latlng";
import { errorHandler,responseHandler } from "../../../util/common";

export default async function handler(req, res) {


  try {

    const { id } = req.query;

    await dbConnect();


    const {Name,lat,lng,rad,} = req.body;

    const updateContractors = await Latlng.findByIdAndUpdate(id,
        { locName:Name,
          latitude:lat,
          longitude:lng,
          radius:rad,
          userId: '631ad70c7d662c9bacd2654d',        
        }).exec();

     console.log('id',id)

    if (updateContractors) {

      responseHandler(updateContractors, res);

    } else {

      errorHandler("Something went wrong", res);
      
    }
  } catch (error) {
    errorHandler(error, res);
  }
}
