const Joi = require("joi");
const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
});

const Genre = mongoose.model("Genres", genreSchema);

function genreValidation(genre) {
  const schema = Joi.object({
    name: Joi.string().alphanum().required().min(1).max(20),
  });
  return schema.validate(genre);
}

exports.Genre = Genre;
exports.validate = genreValidation;
exports.genreSchema = genreSchema;
