import express, { Router } from "express";

import { addUser, postUser } from "../controller/user-controller.js";

const route = express.Router();

route.post("/signup", addUser);
route.post("/login", postUser);

export default route;

