import express from "express";
import {
  getProposedBeneficiary,
  proposedBeneficiary,
} from "../controller/beneficiary.js";

const beneficiaryRoute = express.Router();

// Rudra
beneficiaryRoute.post("/", proposedBeneficiary);

beneficiaryRoute.get("/", getProposedBeneficiary);

export default beneficiaryRoute;
