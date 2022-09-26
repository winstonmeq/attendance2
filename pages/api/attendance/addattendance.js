
import { dbConnect } from "../../../connect/dbconnect";
import Attendance from "../../../model/Attendance";
import { errorHandler,responseHandler } from "../../../util/common";

import multer from "multer";
import nc from "next-connect";

export const config = {
  api: {
    bodyParser: false,
  },
};

const path = require('path')

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(process.cwd(), "public", "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, new Date().getTime() + "-" + file.originalname);
    },
  }),
});


const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.single('image'))
  .get((req, res) => {
    res.send("Hello world eee");
  })
  .post( async (req, res) => {

    try {

      //const session = await getSession({req});
      // if(session){
      //   errorHandler("Access denied", res);
      // }else {

        const {empId,totalmin,timeIn,timeOut,day,month,year,lat,lng,datetime,locId,userId} = req.body;
         
  

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
        image:"/uploads/" + req.file.filename,
        userId:userId
       
      });

    
      const saveAtt = await att.save();

      if (saveAtt) {
       
        // responseHandler(saveAtt, res, 200);
        // dbConnect.close();

        res.status(200).json(saveAtt)
        
      } else {
        errorHandler("Something went wrong", res);
      }

     // }

    }catch(error){
      errorHandler(error, res);
    }

  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });


  export default handler;
  