import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req,res) => {
    const {userId,prompt,tag} = await req.json();

    //connect to db 
    try{
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response (JSON.stringify(newPrompt), {
            status : 201
        })
    }catch(error){
        new Response("Failed to create a new prompt",{
            status : 500
        })
    }
}

export const GET = async (res) => {
    try{
        await connectToDB();

        const prompts = await Prompt.find({}).populate("creator");

        return new Response (JSON.stringify(prompts),{
            status: 200
        })

    }catch(error){
        return new Response ("Failed to fetch all prompts", {
            status : 500
        })

    }
}