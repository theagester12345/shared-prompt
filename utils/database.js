import moongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
    moongoose.set('strictQuery',true);
    if (isConnected){
        console.log('MongoDB is already connected...');
        return;
    }

    try {
        await moongoose.connect(process.env.MONGODB_URI,{
            dbName:"shared_prompts",
            useNewUrlParser : true,
            useUnifiedTopology:true,
        })

        isConnected = true

        console.log('MongoDB connected...');

    }catch(error){
        console.log('MongoDB Error: '+error);
    }
}

