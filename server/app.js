import express from "express";
const app = express();
import Volunteer from "./models/volunteer.js";
import volunteerRoute from './api/volunteer.js'
// import authRoute from "./api/auth.js";
import { connectToDB } from "./lib/mongoose.js";
// import Admin from "./models/admin.js";
import bcrypt from "bcrypt";


// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use("/api/v1", authRoute);

async function seedDB() {
  try {
    const hashedPassword = await bcrypt.hash("123", 12);
    
    const benificiary = await Volunteer.create({
      name:'Volunteer',
      email:'vol@gmail.com',
      password:hashedPassword,
      taluka:'TALUKA',
      address:'addressOfVolunteer',
      phone:999999999

      
    });
   // console.log(admin);
  } catch (error) {
   // console.log(error);
  }
}

try {
  await connectToDB();
       seedDB();
//app.use('/api/v1/volunteer',volunteerRoute);
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (error) {
  //console.log(error);
}