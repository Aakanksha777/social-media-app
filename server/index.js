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
const { MongoClient, ServerApiVersion } = require("mongodb");

dotenv.config();

//DB Connection:--
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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
