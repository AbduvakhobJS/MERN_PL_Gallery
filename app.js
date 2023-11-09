const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/travel', require('./router/Travel.router'))

async function dev(){
    try {
       await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true
        })
        .then(() => {
            console.log("Malumotlar bazasi ishlayapti");
        })
        .catch((error) => {
            console.log(error)
        })
        app.listen(process.env.PORT, () => {
            console.log("Server ishlayapti")
        })
    } catch (error) {
        console.log(error)
    }
}
dev()
