import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoute from "./routes/productRoute.js";
//configure env in my case it is in root otherwise pass a path in the config {}
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoute);
app.get("/", (req, res) => {
  res.send({
    message: "welcome to ecommerce app",
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`sever is running on ${PORT}`);
});
