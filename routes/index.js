const express = require("express");
const tourRoutes = require("./tourRoutes");
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");
const bookingRoutes = require("./bookingRoutes");

const route = express.Router();

route.use("/tours", tourRoutes);
route.use("/user", userRoutes);
route.use("/reviews", reviewRoutes);
route.use("/bookings", bookingRoutes);

module.exports = route;
