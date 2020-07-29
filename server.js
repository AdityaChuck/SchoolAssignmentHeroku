//require necessary modules and middlewares
const express = require('express')
const bodyParser = require("body-parser")
const router = require('./routes/routing')
const myErrorLogger = require('./utilities/errorlogger')
const myRequestLogger = require('./utilities/requestlogger')
const helmet = require("helmet")
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001 //PORT

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.use(myRequestLogger)
app.use('/', router) //use the routes

//send static
app.use(express.static('client/build'))

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'client','build','index.html'))
})

app.use(myErrorLogger)

app.listen(PORT,console.log(`Server listening in port ${PORT}`))


module.exports = app



 