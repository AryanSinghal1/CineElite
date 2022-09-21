const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const route = require('./routes/userRoute')
const cookieParser = require('cookie-parser');
require("./connection/connection");
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true , limit:"500mb"}));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(cookieParser());
app.use("/api", route);
app.listen(port, () => {
  console.log(`Listening to the server ${port}`);
});
