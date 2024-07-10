import express from 'express'
import { configDotenv } from 'dotenv'
import dotenv from 'dotenv';
import { DatabaseConnection } from './components/DatabaseConnection.js';
import bookroute from './Route/book.route.js'
import cors from "cors"
configDotenv()
dotenv.config()
const app = express()

const PORT=process.env.PORT || 4000

// connect to mongodb
DatabaseConnection();
app.use(cors())
 
// defining route

app.use("/book",bookroute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})