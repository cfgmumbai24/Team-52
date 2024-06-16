import mongoose from "mongoose";
import Benificiary from "./benificiary.js";

const livestockSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  //martality date also empty
  mortalityDate: {
    type: Date,
  },
  vaccinationStatus: {
    type: Boolean,
    required: true,
  },
  pregnancyStatus: {
    type: Boolean, //preg type bool
    required: true,
  },
  soldStatus: {
    type: Boolean,
    default: false,
  },
  dateOfDistribution: {
    type: Date,
    required: true,
  },
  benificiaryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Benificiary,
    required: true,
  },
});

const Livestock =
  mongoose.models.Livestock || mongoose.model("Livestock", livestockSchema);
export default Livestock;
