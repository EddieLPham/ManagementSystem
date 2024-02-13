const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookingSchema = new Schema(
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
    ticketPrice: { type: String, required: true },
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Booking", BookingSchema);
