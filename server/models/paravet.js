import mongoose from "mongoose";

const paravetSchema = new mongoose.Schema({});

const Paravet =
  mongoose.models.Paravet || mongoose.model("Paravet", paravetSchema);
export default Paravet;