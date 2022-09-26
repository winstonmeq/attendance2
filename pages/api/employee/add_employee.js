
import { dbConnect } from "../../../connect/dbconnect";
import Employee from "../../../model/Employee";
import { errorHandler,responseHandler } from "../../../util/common";
import { getSession } from "next-auth/react";

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
      cb(null, path.join(process.cwd(), "public", "employee"));
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

    
        const { bioId,fName,lName,designation,office,mobile,address,userId} = req.body;
         
        
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
          image:"/employee/" + req.file.filename,
          
        });
  
      
        const saveEmp = await emp.save();
  
        if (saveEmp) {
         
          responseHandler(saveEmp, res);
          
        } else {
          errorHandler("Something went wrong", res);
        }


      
     

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
  