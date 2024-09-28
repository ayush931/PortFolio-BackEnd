import app from './app.js'
import connectionToDB from './src/config/dbConnection.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    await connectionToDB()
    console.log(`App is running on ${PORT}`)
})