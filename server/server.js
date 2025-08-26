import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './config/instrument.js'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/Webhooks.js'
const app = express()



const port = process.env.PORT || 5000

// connect to database
await connectDB()

app.use(cors())
app.use(express.json())

// Routes

app.get('/', (req, res) => {
  res.send('API working')
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.get('/webhooks' , clerkWebhooks)

Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
