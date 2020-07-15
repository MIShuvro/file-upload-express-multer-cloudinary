const express = require('express')
require('dotenv').config()
const app = express()
express.urlencoded({ extended: false })
app.use(express.json())

app.use(require('./src/fileUploadRoute'))

const PORT = process.env.PORT || 4545
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})