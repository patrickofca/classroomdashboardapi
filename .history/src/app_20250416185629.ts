import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src/public")));

//change to main route
app.get("/", (req, res) => {
  res.send("Welcome to the Classroom Dashboard");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).render("error", {
    message: "This is not the URL you are looking for!",
  });
});

d;

export default app;
