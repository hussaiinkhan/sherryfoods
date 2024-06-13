const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database Connected:', connect.connection.host, connect.connection.name);

        //Fetching the stored data in our data base to be shown on website
        const db = connect.connection.db; // Use the connected db instance
        const collection = db.collection('foods'); // Fetch the correct collection

        const data = await collection.find({}).toArray(); // Use await to fetch the data
        global.menu = data  //declaring menu variable globally so that it can be accessed or updated anywhere in the application

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;
