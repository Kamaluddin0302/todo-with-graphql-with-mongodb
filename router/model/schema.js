const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    age: { type: Number, required: true },
    id: { type: Number, required: true },
})
const UserTodo = mongoose.model("User", UserSchema)
module.exports = UserTodo