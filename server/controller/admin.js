import express from "express";
import Beneficiary from "../models/beneficiary.js";
import Activity from "../models/activity.js";
import Volunteer from "../models/volunteer.js";

export const addVolunteer = async (req, res) => {
  const volunteer = req.body;
  if (!volunteer) {
    return res.status(400).json();
  }
  const newVolunteer = new Volunteer(req.body);
  const vol = await newVolunteer.save();
  if (vol) {
    return res.status(200).json(vol);
  } else {
    return res.status(400).json("no data received");
  }
};
