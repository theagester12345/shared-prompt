import { connectToDB } from "@utils/database";

export const POST = async (req,res) => {
    const {userId,prompt,tag} = await req.json();

    //connect to db 
    try{
        await connectToDB();
        
    }catch(error){

    }
}