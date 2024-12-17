const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();
const dotenv = require("dotenv")
const PORT = 8082;

dotenv.config()

mongoose
.connect(
  process.env.MONGODB_URL
)
.then(() => console.log("DB is connected"))
.catch((error) =>
  console.log("We got an error while connecting to db", error)
);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api",routes)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});