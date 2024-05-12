import express from "express";
import Hotel from "../models/Hotels.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.controller.js";
const router = express.Router();

// create
router.post("/", createHotel);

// update
router.put("/:id", updateHotel);

// delete

router.delete("/:id", deleteHotel);

// get
router.get("/:id", getHotel);

// get all

router.get("/", getAllHotel);

export default router;
