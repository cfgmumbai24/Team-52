import Benificiary from "../models/benificiary.js";
import Volunteer from "../models/volunteer.js";
import Dailypost from "../models/dailypost.js";

export const showvolunteer = async (req, res) => {
  const { id } = req.params;
  const vol = await Volunteer.findById(id);
  if (!vol) {
    return res.send(400).json("could not find volunteer");
  } else {
    return res.send(200).json(vol);
  }
};
//Done

export const updatedaily = async (req, res) => {
  const { price, notice } = req.body;
  const daily = await Dailypost.create({
    price: price,
    note: notice,
  });

  console.log("afhasddf", price, notice);

  if (daily) {
    return res.status(200).json(daily);
  } else {
    return res.status(400).json("could not update");
  }
};
//Done

export const createbeneficiary = async (req, res) => {
  const finalbenificiary = new Benificiary(req.body);
  const final = await finalbenificiary.save();
  if (final) {
    return res.status(200).json(finalbenificiary);
  } else {
    return res.status(400).json("could not create beneficiary");
  }
};
//Done
export const showproposedbeneficiary = async (req, res) => {
  const listbenificiaries = Benificiary.find();
  if (listbenificiaries) {
    return res.status(200).json(listbenificiaries);
  } else {
    return res.status(400).json("no proposed beneficiaires");
  }
};
//done
//trackvolunteer
export const getPrice = async (req, res) => {
  const list = await Dailypost.find({
    $sort: { createdAt: -1 },
    $limit: 30,
  });
  if (list) {
    return res.status(200).json(list);
  } else {
    return res.status(400).json("could not find price");
  }
};

//done
