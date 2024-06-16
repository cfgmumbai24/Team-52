import express from "express";
import {
  createbeneficiary,
  getPrice,
  showvolunteer,
  updatedaily,
} from "../controller/admin.js";
const adminRoute = express.Router();

adminRoute.get("/show/:id", showvolunteer);
adminRoute.get("/getPrice", getPrice);
adminRoute.post("/updatePrice", updatedaily);
// adminRoute.post("/add", AddVolunteer);
// adminRoute.get('/track/:id',trackvolunteer);
adminRoute.post("/create", createbeneficiary);

export default adminRoute;
