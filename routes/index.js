const express = require("express");
const tourRoutes = require("./tourRoutes");
const userRoutes = require("./userRoutes");

const route = express.Router();

route.use("/tours", tourRoutes);
route.use("/user", userRoutes);

module.exports = route;
