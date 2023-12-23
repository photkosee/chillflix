const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
// const movieRoute = require("./routes/movies");

dotenv.config();
app.use(cors());

// middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
// app.use("/api/movie", movieRoute);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
