import express from 'express'
import bodyParser from "body-parser"
import cors from "cors"
import fileUpload from 'express-fileupload'
import dotenv from "dotenv"

const app = express()
dotenv.config();
const port = process.env.PORT ?? 3000

import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import routes from "./src/routes"

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

routes(app);

app.listen(port, () => {
  console.log(`Listening :${port}`)
})
