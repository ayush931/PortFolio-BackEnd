import express, { urlencoded } from 'express'
import { config } from 'dotenv'
config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello")
})

export default app