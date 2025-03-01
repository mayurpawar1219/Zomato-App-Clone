import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";

// App Config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from "uploads" directory
app.use("/uploads", express.static("uploads"));

// Database Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
