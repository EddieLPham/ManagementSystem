const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SessionSchema = new Schema(
  {
    admin: {
      type: mongoose.Types.ObjectId,
      ref: "admin",
      required: true,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    notes: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Session", SessionSchema);
