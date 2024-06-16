import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hamlet: {
    type: String,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    required: true,
  },
  policy: {
    num: {
      type: Number,
      required: true,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },

  //AADHAR AND RATION CARD YET TO BE ADDED
});
const Beneficiary =
  mongoose.models.Beneficiary ||
  mongoose.model("Beneficiary", beneficiarySchema);
export default Beneficiary;
