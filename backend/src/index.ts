import express, { Response, NextFunction, Request } from "express";
import "reflect-metadata";
import { AppDataSource } from "./database/ormconfig";
import { router } from "./routers/gitTableData.routes";
import cors from "cors";
import path = require("path");

const app: express.Application = express();

app.use(cors());

app.use(express.json());

app.use("/gitTableData", router);


app.use(express.static(path.join(__dirname, "../../frontend")));

const port: number = 5002;

app.listen(port, async () => {
  try {
    console.log(path.join(__dirname, "../../frontend"));
    await AppDataSource.initialize();
    console.log("connected to mysql");

    console.log(`TypeScript with Express 
             http://localhost:${port}/`);
  } catch (error) {
    console.log("database error", error);
  }
});
