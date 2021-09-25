const mongoose = require('mongoose')
const express = require('express')
var cors = require('cors')
const app = express()


const uri = "mongodb+srv://root:1234@coletaseletiva.kbpm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri)
const con = mongoose.connection

app.use(cors())
app.use(express.json())

const placesRouter = require('./routes/places')

app.use('/locaisColeta', placesRouter)
app.listen(9000, ()=>{
    console.log("running!")
})

