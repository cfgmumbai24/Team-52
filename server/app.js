import express from "express";
import authRoute from "./api/auth.js";
import { connectToDB } from "./lib/mongoose.js";
import Admin from "./models/admin.js";
import bcrypt from "bcrypt";
import cors from "cors";
import volunteerRoute from "./api/volunteer.js";
import beneficiaryRoute from "./api/beneficiary.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/v1", authRoute);
app.use("/api/v1/volunteer", volunteerRoute);
app.use("/api/v1/proposedbeneficiary", beneficiaryRoute);

async function seedDB() {
  try {
    const hashedPassword = await bcrypt.hash("123", 12);
    const admin = await Admin.create({
      name: "Admin",
      email: "admin@123.com",
      password: hashedPassword,
    });

    console.log(admin);
  } catch (error) {
    console.log(error);
  }
}

try {
  await connectToDB();
  //   seedDB();
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (error) {
  console.log(error);
}
