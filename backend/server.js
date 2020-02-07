const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server home');
});

app.listen(5000, () => console.log('serving on localhost:5000'));

const userRouter = require('./routes/users');
const orderRouter = require('./routes/orders');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);