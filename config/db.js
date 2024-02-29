import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //   if the database is alreadt connected , don't connect again
  if (connected) {
    console.log(`MongoDB is already connected.`);
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
