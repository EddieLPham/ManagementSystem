const Booking = require("../model/Booking");
const Users = require("../model/Users");

exports.getBookings = async (request, response) => {
  try {
    const booking = await Booking.find()
      .populate({ path: "admin", model: Users, select: "name" })
      .populate({ path: "customer", model: Users, select: "name" });
    response.json(booking);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

exports.getOneBookings = async (request, response) => {
  try {
    const bookingId = request.params.bookingId;
    const booking = await Booking.findById(bookingId)
      .populate({ path: "admin", model: Users, select: "name" })
      .populate({ path: "customer", model: Users, select: "name" })
      .exec();
    if (booking) {
      response.json(booking);
    } else {
      response.json("Booking not found");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

exports.createBooking = async (request, response) => {
  try {
    const { admin, customer, ticketPrice, appointmentDate, status, isPaid } =
      request.body;
    const booking = new Booking({
      admin,
      customer,
      ticketPrice,
      appointmentDate,
      status,
      isPaid,
    });
    await booking.save();
    response.status(201).json(booking);
  } catch (error) {
    console.log(error);
    response.status(500).send("Internal Server Error");
  }
};

exports.updateBooking = async (request, response) => {
  try {
    const bookingId = request.params.bookingId;
    const updateData = {
      admin: request.body.admin,
      customer: request.body.customer,
      ticketPrice: request.body.ticketPrice,
      appointmentDate: request.body.appointmentDate,
      status: request.body.status,
      isPaid: request.body.isPaid,
    };
    const booking = await Booking.updateOne({ _id: bookingId }, updateData);
    if (!booking) {
      response.status(404).send("Booking not found");
    }
    response.json(booking);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};

exports.deleteBooking = async (request, response) => {
  try {
    const booking = await Booking.findOneAndDelete(request.params.id);
    if (!booking) {
      response.status(404).send("Booking does not found!");
    }
    response.json("Booking deleted succesfully!");
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
};
