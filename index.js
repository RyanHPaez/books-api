const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");



//middleware
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

//mongoose
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo");
  }
);

// index
app.get("/", (req, res) => {
  res.send(`
    <body>
   <h1> Hello World!</h1>
    </body>`);
});

//books controller
const booksController = require("./controllers/books_controller");
app.use("/books", booksController);

app.listen(process.env.PORT, () => {console.log('Listening')})
