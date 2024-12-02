//It contains schemas and models for all the collections you want to use,
// and then we are exporting all the models created so that they can be imported into the file in which we will get data from different collections.
const mongoose = require('mongoose')
 
// Course Modal Schema
const logs = new mongoose.Schema({
    _id: Number,
    courseId: String,
    uvuId: String,
    date: String,
    text: String,
    id: String
})
 
const courses = new mongoose.Schema({
    _id: Number,
    id: String,
    display: String
})

const users = new mongoose.Schema({
    _id: Number,
    unverstiy: {
        type: String,
        enum:['UVU', 'UofU'],
        required: true

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['admin', 'teacher', 'ta', 'student'],
        required: true
    },
    

})


 
 
// Creating model objects  
const LOGS = mongoose.model('logs', logs);
const COURSES = mongoose.model('courses', courses);
const USERS = mongoose.model('users', users)
 
// Exporting our model objects
module.exports = {
    LOGS, COURSES, USERS
}