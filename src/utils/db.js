import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_LOCAL_URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,

    });
    // await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }

};

export default connect;
