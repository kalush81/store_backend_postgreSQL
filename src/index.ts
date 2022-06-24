import express, { Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import allRoutes from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

allRoutes(app);

app.get("/", (_req, res: Response) => {
  res.send("Hello in home page");
});

app.listen(3000, () => console.log("server is up and running"));
