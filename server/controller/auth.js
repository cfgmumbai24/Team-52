import Admin from "../models/admin.js";
import Paravet from "../models/paravet.js";
import Volunteer from "../models/volunteer.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };

  res.send("Signup route");
};

export const login = async (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };

  if (!userData.email || !userData.password || !userData.role) {
    return res.status(400).send("Invalid credentials");
  }

  let user;

  if (userData.role === "admin") {
    user = await Admin.findOne({
      email: userData.email,
    });
  } else if (userData.role === "paravet") {
    user = await Paravet.findOne({
      email: userData.email,
    });
  } else {
    user = await Volunteer.findOne({
      email: userData.email,
    });
  }

  if (!user) {
    return res.status(400).send("Invalid credentials");
  }

  const comparePassword = await bcrypt.compare(
    userData.password,
    user.password
  );

  if (!comparePassword) {
    return res.status(400).send("Invalid credentials");
  }

  const token = jwt.sign(
    { email: user.email, role: userData.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  const response = {
    token: token,
    role: userData.role,
  };

  res.send(response);
};

export const logout = async (req, res) => {};
