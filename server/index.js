const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/user-routes");
const authRoute = require("./routes/auth-routes");
const postRoute = require("./routes/post-routes");

dotenv.config();

//DB Connection:--
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

//Middleware
app.use(express.json()); // It parses incoming requests with JSON payloads and is based on body-parser.
app.use(helmet()); // secure your Express.js apps by setting various HTTP headers
app.use(morgan("common")); // res :  [29/May/2023:10:29:08 +0000] "GET /user HTTP/1.1" 200 23
app.use(cors());

//routes

// app.use('/social/user', user);
app.use("/social/user", userRoute);
app.use("/social/auth", authRoute);
app.use("/social/post", postRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
