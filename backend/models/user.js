const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  profileImg: {
    type: String,
    default: ""
  }
},{timestamps: true});

// const UserModel = mongoose.model('UserModel', UserSchema);
module.exports = mongoose.model("User", UserSchema)
 
// export default UserModel;
