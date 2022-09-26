import { dbConnect } from "../../../connect/dbconnect";
import { errorHandler,responseHandler } from "../../../util/common";
import User from "../../../model/User";




import bcrypt from "bcrypt";
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
      cb(null, path.join(process.cwd(), "public", "users"));
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

        const { email,password} = req.body;
         
        console.log('ddd',email,password);
        
      await dbConnect();

      const hashPassword = await bcrypt.hash(password, 8);

      const user = new User({
        ...req.body,
        password: hashPassword,
        image: "/users/" + req.file.filename,
        userlevel: 0
      });

      const saveUser = await user.save();

      if (saveUser) {
        const userDoc = saveUser._doc;
        delete userDoc.password;

        responseHandler(saveUser, res, 200);
        dbConnect.close();
        
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

