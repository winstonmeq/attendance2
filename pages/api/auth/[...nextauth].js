import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "../../../connect/dbconnect";
import User from "../../../model/User";
import bcrypt from "bcrypt";
import nextAuth from "next-auth";


export default NextAuth({

    
  providers: [
    
    CredentialsProvider({


       name: "Credentials",

      async authorize(credentials, req) {
        

        const { email, password } = credentials;

        // console.log({ email, password });


        await dbConnect();

        const user = await User.findOne({ email }).exec();

        if(!user){
          throw new Error("Something went wrong!");
        }

        const userDoc = user._doc;       

        const isMatched = await bcrypt.compare(password, userDoc.password);

        console.log("isMatched!");

        if (user && isMatched) {
          // Any object returned will be saved in `user` property of the JWT         

          delete userDoc.password;     
          return userDoc;
       

        } else {

          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error("Invalid Email & Password");

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }

      },

    }),
    
  ],

  callbacks: {

    // async signIn({ user, account, profile, email, credentials }) {

    //    console.log('userlogin',user)
    //   return user
    // },

    async jwt({ token, user,  }) {
      if (user) {
        token.user = user;
        // token.userlevel = user.userlevel
      }

    // console.log("jwt", { token,user});

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = token.user;
        // session.userlevel = token.userlevel
      }
      //  console.log("session", { session, token });

      return session;
    },
    
  },
});
