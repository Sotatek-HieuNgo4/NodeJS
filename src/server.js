const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
require('dotenv').config()

const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config view engine
configViewEngine(app)

//config routes
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Run at http://localhost:${port}`)
})