const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MERN:Uber123@cluster0.jpb5quf.mongodb.net/');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
})

const completedSchema = mongoose.Schema({
    title: String,
    description: String
})

const Todos =mongoose.model('Todos',todoSchema)
const Completed = mongoose.model('Completed',completedSchema)

module.exports = {
    Todos,
    Completed
}