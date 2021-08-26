const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const zetaRoutes = require("./routes/zeta");
require("dotenv").config();

app.use(cors());

app.use(express.json());
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("listening on PORT 4000");
});

app.use(`/`, zetaRoutes);
