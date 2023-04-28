import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connection = mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection succeed");
  })
  .catch((err) => console.error("Connection failed", err.message));

export default connection;
