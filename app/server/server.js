const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');

const app = express();
const port = 3001;

const passportRouter = require("./routes/passport.js");
const reviewRouter = require("./routes/review.js");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

dotenv.config();

// app.use('/api/passport', passportRouter);

app.use("/api/review", reviewRouter);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
