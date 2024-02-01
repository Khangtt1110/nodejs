const mongoose = require('mongoose')

async function connectDb(){
    try {
        await mongoose.connect('mongodb://localhost:27017/Nodejs_dev');
        console.log('connect success');
    } catch (error) {
        console.log("🚀 ~ connectDb ~ error:", error)
    }
}

module.exports = { connectDb }