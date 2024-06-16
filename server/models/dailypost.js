import mongoose from "mongoose";

const postdailySchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
});

const Dailypost =
  mongoose.models.Dailypost || mongoose.model("Dailypost", postdailySchema);
export default Dailypost;
