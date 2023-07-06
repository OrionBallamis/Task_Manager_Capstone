const express = require("express");
const cors = require('cors')
const ViteExpress = require("vite-express");
const path = require('path')
const db = require('./database')
const {User} = require('./models')

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.static('src'))

const { allTaskHandler, addTaskHandler, deleteTaskHandler, loginHandler, signUpHandler } = require('./controller')

app.get('/allTask', allTaskHandler)
app.post('/addTask', addTaskHandler)
app.post('/deleteTask', deleteTaskHandler)
app.post('/login', loginHandler)
app.post('/signUp', signUpHandler)

db.sync()
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
