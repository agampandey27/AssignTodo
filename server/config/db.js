// import mongoose from 'mongoose';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const db = process.env.MONGO_URI;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(db);
//     console.log('MongoDB Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose, { mongo } from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose.connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err)=> console.log(err)
    );
};

export default connectDB ; 

