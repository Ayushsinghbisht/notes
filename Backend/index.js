import express from 'express'
import { configDotenv } from 'dotenv'
import dotenv from 'dotenv';
import { DatabaseConnection } from './components/DatabaseConnection.js';
import bookroute from './Route/book.route.js'
import cors from "cors"
import router from './Route/user.route.js';
import bodyParser from 'body-parser';



configDotenv()
dotenv.config()
const app = express()

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

const PORT=process.env.PORT || 4000

// connect to mongodb
DatabaseConnection();
app.use(cors());
 
// defining route

app.use("/course",bookroute)
app.use("/user",router)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})