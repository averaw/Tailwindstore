import express, { Router } from "express";

import { addUser, postUser } from "../controller/user-controller.js";
import { postProduct, getProduct } from "../controller/product-controller.js";

const route = express.Router();

route.post("/signup", addUser);
route.post("/login", postUser);
route.post("/uploadProduct", postProduct);
route.get("/product", getProduct);

export default route;
