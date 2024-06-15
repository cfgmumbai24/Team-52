import express from "express";
import {
  addbenificiary,
  addplace,
  addVolunteer,
  editbenificiary,
  showbeneficiary,
} from "../controller/volunteer.js";
const volunteerRoute = express.Router();

volunteerRoute.post("/add", addbenificiary);
volunteerRoute.get("/show/:id", showbeneficiary);
volunteerRoute.patch("/edit/:id", editbenificiary);
volunteerRoute.post("/addplace/:id", addplace);

// Rudra
volunteerRoute.post("/", addVolunteer);

export default volunteerRoute;
