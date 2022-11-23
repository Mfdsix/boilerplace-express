const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const fileUpload = require('express-fileupload')
const app = express()
require('dotenv').config();
const port = process.env.PORT ?? 3000

const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());
app.use('/static', express.static(path.join(__dirname, 'uploads')))

const dir = path.join(__dirname, 'logs');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);
const accessLogStream = fs.createWriteStream(`${dir}/error.log`, { flags: 'a' })
app.use(morgan('common', {
    stream: accessLogStream,
    skip: function (req, res) { return res.statusCode < 400 }
}));

require('./src/routes')(app);

app.listen(port, () => {
  console.log(`Listening :${port}`)
})
