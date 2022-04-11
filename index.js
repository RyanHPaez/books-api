const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()



//middleware
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())



//mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})


// index
app.get('/', (req, res) =>{
    res.send(`
    <body>
   <h1> Hello World!</h1>
    </body>`)
})


//books controller
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)


//listen  

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})