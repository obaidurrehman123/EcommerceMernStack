import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Ecommerce");
    console.log(
      `Connected to MongoDB database successfully ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error in `);
  }
};

export default connectDB;
