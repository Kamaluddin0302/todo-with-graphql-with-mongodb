const express = require('express') // import Express
var cors = require('cors') // Permission for any website
const bodyParser = require('body-parser')

const app = express()
const mongoose = require("./router/db") // import database
var db = mongoose.connection; // connect to mongoose 
app.use(cors())
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("database successfully ygrygygryg")
});
app.listen(3003, () => { // 
    console.log("Server is running on port 3003")
})
app.use(express.json())
app.use("/", require("./router")) //
app.use(bodyParser.json())




module.exports = app