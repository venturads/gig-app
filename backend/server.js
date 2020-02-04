const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

app.use("./api/users", usersRouter);

app.get("/", (req, res) => {
    res.send('home page');
});

app.listen(5000, () => console.log("serving on localhost:5000"));

app.use('/users', usersRouter);
app.use('/orders', ordersRouter);