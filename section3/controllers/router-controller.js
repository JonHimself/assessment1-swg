import { v4 as uuidv4 } from "uuid";

let DUMMY_DATA = [
  {
    _id: uuidv4(),
    name: "paper bag",
    recyclable: true,
    quantity: 100,
    pricePerUnit: 0.05,
  },
  {
    _id: uuidv4(),
    name: "dirty cans",
    recyclable: false,
    quantity: 13,
    pricePerUnit: 0,
  },
  {
    _id: uuidv4(),
    name: "shards of glass",
    recyclable: false,
    quantity: 5000,
    pricePerUnit: 0,
  },
  {
    _id: uuidv4(),
    name: "plastic bags",
    recyclable: true,
    quantity: 21,
    pricePerUnit: 0.02,
  },
];

export const getUser = (req, res, next) => {
  res.status(200).send(DUMMY_DATA);
};

export const getOneUser = (req, res, next) => {
  let { _id } = req.params;
  const foundItem = DUMMY_DATA.filter((item) => item._id === _id);
  if (foundItem.length === 0) {
    const err = new Error("item doesnt exist");
    err.status = 404;
    next(err);
  } else {
    res.status(200).send(foundItem);
  }
};

export const postUser = (req, res, next) => {
  let { name, recyclable, quantity, pricePerUnit } = req.body;
  if (
    !Object.keys(req.body).includes("name") ||
    !Object.keys(req.body).includes("quantity") ||
    !Object.keys(req.body).includes("recyclable") ||
    !Object.keys(req.body).includes("pricePerUnit")
  ) {
    const err = new Error("Please enter every property");
    err.status = 404;
    next(err);
  } else {
    DUMMY_DATA.push({
      _id: uuidv4(),
      name,
      recyclable,
      quantity,
      pricePerUnit,
    });
    res.status(200).send(`Data has successfully been updated`);
  }
};

export const patchUser = (req, res, next) => {
  let { _id } = req.params;
  let { name, recyclable, quantity, pricePerUnit } = req.body;
  let foundItem = DUMMY_DATA.find((item) => item._id === _id);
  console.log(foundItem);
  if (name) foundItem.name = name;
  if (recyclable) foundItem.recyclable = recyclable;
  if (quantity) foundItem.quantity = quantity;
  if (pricePerUnit) foundItem.pricePerUnit = pricePerUnit;
  res.status(200).send(`Task: ${_id} has been updated.`);
};

export const deleteUser = (req, res, next) => {
  let { _id } = req.params;
  let foundItem = DUMMY_DATA.filter((item) => item._id === _id);
  DUMMY_DATA = DUMMY_DATA.filter((data) => data._id !== _id);
  if (foundItem.length === 0) {
    const err = new Error("cannot delete nonexistent item");
    err.status = 404;
    next(err);
  } else {
    res.status(200).send(`Data selection has been deleted`);
  }
};
