import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Footer from "./HeaderFooter/Footer.jsx";
import Header from "./HeaderFooter/Header.jsx";
import User from "./routes/userWebController/User.jsx";
import NewUser from "./routes/userWebController/NewUser.jsx";
import ViewUser from "./routes/userWebController/ViewUser.jsx";
import Booking from "./routes/bookingWebController/Booking.jsx";
import SideBar from "./HeaderFooter/SideBar.jsx";
import ViewBooking from "./routes/bookingWebController/ViewBooking.jsx";
import NewBooking from "./routes/bookingWebController/NewBooking.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className=" container w-full p-2 flex h-screen ">
          <SideBar />
          <div className="flex h-screen mx-auto w-screen items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/user/:userId" element={<ViewUser />} />
              <Route path="/newuser" element={<NewUser />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/:bookingId" element={<ViewBooking />} />
              <Route path="/newbooking" element={<NewBooking />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
