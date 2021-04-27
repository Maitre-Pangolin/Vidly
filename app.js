const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const genreRouter = require("./routes/genres");
const customerRouter = require("./routes/customers");
const movieRouter = require("./routes/movies");
const rentalRouter = require("./routes/rentals");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost/Vidly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(express.json());
app.use("/api/genres", genreRouter);
app.use("/api/customers", customerRouter);
app.use("/api/movies", movieRouter);
app.use("/api/rentals", rentalRouter);

app.get("/", (req, res) => {
  res.send("Hi");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening"));
