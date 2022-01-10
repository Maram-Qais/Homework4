import express from "express";
import products from "./proudcts";

const app = express();

app.use(express.json());

app.use("/proudcts.js, proudcts");

app.listen(8000);
