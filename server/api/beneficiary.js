import express from "express";
import { proposedBeneficiary } from "../controller/beneficiary.js";

const beneficiaryRoute = express.Router();

// Rudra
beneficiaryRoute.post("/", proposedBeneficiary);

export default beneficiaryRoute;
