const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/formDB');
        console.log("mongoDb connected....")

    }catch (error) {
        console.log("error connnecting to mongoDB:" , error.message);
        process.exit(1);
    }
};

module.exports = connectDB;