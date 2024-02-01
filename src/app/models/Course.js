const mongoose = require('mongoose')

const Schema = mongoose.Schema;    

const Course = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    thumb_nail: {
        type: String,
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Course', Course);