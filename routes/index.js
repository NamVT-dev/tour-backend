const express = require("express");
const tourRoutes = require("./tourRoutes");
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");

const route = express.Router();

route.use("/tours", tourRoutes);
route.use("/user", userRoutes);
route.use("/reviews", reviewRoutes);

module.exports = route;
