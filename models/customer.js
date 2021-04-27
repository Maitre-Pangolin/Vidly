const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customers",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    isGold: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
  })
);

function customerValidation(customer) {
  const schema = Joi.object({
    name: Joi.string().alphanum().required().min(1).max(20),
    phone: Joi.string().alphanum().required(),
    isGold: Joi.boolean(),
  });
  return schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = customerValidation;
