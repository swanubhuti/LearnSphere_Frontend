import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import prisma from './database/db.config.js';
import userRoute from './routes/userRoute.js';
import courseRoute from "./routes/courseRoute.js";
import sessionRoute from "./routes/sessionRoute.js";
import enrollRoute from "./routes/enrollRoute.js";

dotenv.config({});
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use('/api/v1/users', userRoute);
app.use("/api/courses", courseRoute);
app.use("/api/sessions", sessionRoute);
app.use("/api/enrollments", enrollRoute);
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})
