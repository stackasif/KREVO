
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { supabase } from "./config/supabase.js";

dotenv.config();

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 50,
});

app.use("/api", limiter);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "KREVO backend is running!",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`KREVO server running on port ${PORT}`);
});
