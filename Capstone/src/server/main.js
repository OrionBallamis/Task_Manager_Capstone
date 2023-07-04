const express = require("express");
const cors = require('cors')
const ViteExpress = require("vite-express");
const path = require('path')

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.static('src'))





ViteExpress.listen(app, 4000, () =>
  console.log("Server is listening on port 4000...")
);
