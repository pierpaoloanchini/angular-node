const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./db');
const chalk = require('chalk');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors())
module.exports = {
  app,
  bodyParser,
  chalk
}

app.get('/test', require('./api/users/user.route.js'));

const server = app.listen(PORT,()=>{
  console.log(chalk.bold.magenta(`server in ascolto sulla porta ${PORT}`));
})
