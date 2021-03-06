const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
      }
},{
      timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;