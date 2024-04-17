import express from "express";
import cors from "cors";
import { authRouter } from "./routers/authRouter";
import path from "node:path";
import { tourRouter } from "./routers/tourRouter";
import { reviewRouter } from "./routers/reviewRouter";
import { authMiddleware } from "./middlewares/auth.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "..", "public")));

app.use("/auth", authRouter);
app.use("/tours", tourRouter);
app.use("/reviews", authMiddleware, reviewRouter);

export default app;
