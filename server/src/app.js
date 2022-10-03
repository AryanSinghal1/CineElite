const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
var bodyParser = require('body-parser');
const route = require('./routes/userRoute')
const cookieParser = require('cookie-parser');
const products = require("./routes/product.router");
require("./connection/connection");
app.use(express.json())
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true , limit:"500mb"}));
app.use(cors());
app.use("/products", products)
app.use(cookieParser());
app.use("/api", route);
app.listen(port, () => {
  console.log(`Listening to the server ${port}`);
});
