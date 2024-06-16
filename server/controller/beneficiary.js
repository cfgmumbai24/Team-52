import Proposedbenificiary from "../models/proposedbenificiary.js";

export const proposedBeneficiary = async (req, res) => {
  const beneficiary = req.body;

  console.log(beneficiary);

  if (!beneficiary) {
    return res.status(400).json();
  }

  const newBenificiary = await Proposedbenificiary.create({
    name: beneficiary.name,
    age: beneficiary.age,
    hamlet: beneficiary.hamlet,
    block: beneficiary.block,
    dateAdded: new Date(),
    address: beneficiary.address,
    hamlet: beneficiary.hamlet,
    city: beneficiary.city,
    state: beneficiary.state,
    phone: beneficiary.phone,
  });

  if (newBenificiary) {
    return res.status(200).json(newBenificiary);
  } else {
    return res.status(400).json("no data received");
  }
};
