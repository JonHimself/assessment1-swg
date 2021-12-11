import express from "express";
const router = express.Router();
import {
  getUser,
  getOneUser,
  postUser,
  patchUser,
  deleteUser,
} from "../controllers/router-controller.js";

router.get("/", getUser);

router.get("/:_id", getOneUser);

router.post("/", postUser);

router.patch("/:_id", patchUser);

router.delete("/:_id", deleteUser);

router.use((req, res, next) => {
  const err = new Error("Items not Found");
  err.status = 404;
  next(err);
});

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

export default router;
