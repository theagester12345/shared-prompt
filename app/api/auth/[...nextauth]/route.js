import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ], 
    callbacks:{
        async session({session}){
            const findSessionUser = await User.findOne({
                email:session.user.email,
            })
    
            session.user.id = findSessionUser._id.toString();
            return session;
        },
        async signIn ({profile}){
            try{
                await connectToDB();
    
                //check if user is already signed in
                const userExists = await User.findOne({
                    email:profile.email
                })


    
                //Since we using Oauth we have to saved the signed in user to our database
                //create user who signs in and doesnt exist
                if(!userExists){
                    await User.create({
                        email:profile.email,
                        username:profile.given_name.toLowerCase(),
                        image: profile.picture
                    })
                } 
                return true;
            }catch(error){
                console.log('Sign In Error: '+error);
                return false;
            }
        },
    },
   
})

export {handler as GET, handler as POST};