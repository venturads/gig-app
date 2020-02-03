const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const routeUsers = require('./routes/users');
const routeOrders = require('./routes/orders');

app.listen(5000, () => console.log("serving on localhost:5000"));