import express from "express";
import cors from "cors";

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

export default app;
