import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static("public"));
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

mongoose
  .connect(
    'mongodb+srv://shivanshsaxena1310:TFitjt7qdFsqDWPd@cafe-backend.wbrgj7y.mongodb.net/'
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });

app.use("/api/users", userRouter);
