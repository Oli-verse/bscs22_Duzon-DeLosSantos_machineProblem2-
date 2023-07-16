const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "User ID is required."]
  },
  orderProducts: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, "Order ID is required."]
      },
      quantity: {
        type: Number,
        required: [true, "Order quantity is required."]
      },
      price: {
        type: Number,
        required: [true, "Order price is required."]
      },
    },
  ],
  purchasedOn: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
