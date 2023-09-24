import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:5173",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type"],
	})
);

app.get("/", (req, res) => {
	return res.status(234).send("Welcome");
});

app.use("/books", booksRoute);

const url = process.env.MONGO_URL;

mongoose
	.connect(url)
	.then(() => {
		console.log("App connected to DB");
		app.listen(PORT, () => {
			console.log(`App is Listening to PORT: ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
