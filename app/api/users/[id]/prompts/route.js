import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (res, {params} ) => {
    try{
        await connectToDB();

        const userId = params.id;
        console.log("params", params)

        const prompts = await Prompt.find({
            creator:userId
        }).populate("creator");

        return new Response (JSON.stringify(prompts),{
            status: 200
        })

    }catch(error){
        return new Response ("Failed to fetch all prompts", {
            status : 500
        })

    }
}