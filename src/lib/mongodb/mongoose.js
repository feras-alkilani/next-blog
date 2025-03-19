import mongoose from "mongoose";
import { collectSegmentData } from "next/dist/server/app-render/collect-segment-data";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-blog",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected To MongoDB");
    initialized = true;
  } catch (error) {
    console.log("Error Connecting To MongoDB", error);
  }
};
