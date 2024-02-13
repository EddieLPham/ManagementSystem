const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
  schedules: [{ type: mongoose.Types.ObjectId, ref: "Schedule" }],
  timestamps: {
    createAt: { type: Date, default: Date.now() },
    updateAt: {
      type: Date,
      default: Date.now(),
    },
  },
});

module.exports = mongoose.model("User", UserSchema);
