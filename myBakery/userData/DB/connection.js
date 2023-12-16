import mongoose from "mongoose";

const dbConnect = async(url,dbname)=>{
    try {
        await mongoose.connect(url,dbname)
        console.log(`connected to database successfully`);
    } catch (error) {
        console.log(error);
        console.log(`error occured while connecting to database`);
    }
}

export {dbConnect};