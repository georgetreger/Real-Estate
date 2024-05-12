import Hotel from "../models/Hotels.js";

export const createHotel = async(req, res, next)=>{
 const newHotel = new Hotel(req.body);
 try {
   const saveHotel = await newHotel.save();
   res.status(200).json(saveHotel);
 } catch (error) {
   next(err)
 }
}

//  update
export const updateHotel = async(req, res, next)=>{
 try {
   const updateHotel = await Hotel.findByIdAndUpdate(
     req.params.id,
     { $set: req.body },
     { new: true }
   );
   res.status(200).json(updateHotel);
 } catch (error) {
  next(err)
 }
}
// delete
export const deleteHotel = async(req, res, next)=>{
  try {
    const updateHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (error) {
    next(err)
  }
}
//   get
export const getHotel = async(req, res, next)=>{
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(err)
  }
}

// get all
export const getAllHotel = async(req, res, next)=>{
  try {
    const Hotels = await Hotel.find();
    res.status(200).json(Hotels);
  } catch (err) {
    // res.status(500).json(error);
    next(err);
  }
}