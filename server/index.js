require("dotenv").config();
const dbConnect = require("./dbConnect");
const cors = require("cors");
const express = require("express");
const app = express();
const userController = require("./controller/userControllers");
const bookingController = require("./controller/bookingController");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
const PORT = process.env.PORT || 8080;
//
//
//
// User Controller -------------------------------{
//get all users
app.get("/api/users", userController.getUsers);
//get one user
app.get("/api/users/:userId", userController.getOneUser);
//create new user
app.post("/api/users", userController.createUser);
//update user
app.put("/api/users/:userId", userController.updateUser);
//delete a user
app.delete("/api/users/:userId", userController.deleteUser);
//-------------------------------------------------}
//
//
//Booking Controller -----------------------------{
//get all bookings
app.get("/api/bookings", bookingController.getBookings);
//get one booking
app.get("/api/bookings/:bookingId", bookingController.getOneBookings);
//create new booking
app.post("/api/bookings", bookingController.createBooking);
//edit booking
app.put("/api/bookings/:bookingId", bookingController.updateBooking);
//delete a booking
app.delete("/api/bookings/:bookingId", bookingController.deleteBooking);
//------------------------------------------------}
//
//
app.get("/", (resquest, response) => {
  response.send("Server is reading");
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT: ", PORT);
});
