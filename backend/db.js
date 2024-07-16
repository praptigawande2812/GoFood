const mongoose= require('mongoose');
const mongoURI='mongodb+srv://goFood:QKSPrVhmNjCjj6M@cluster0.hwc2u6u.mongodb.net/goFood?retryWrites=true&w=majority&appName=Cluster0'


module.exports = async function (callback) {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to mongo");

        const foodCollection = await mongoose.connection.db.collection("food_items");
        const data = await foodCollection.find({}).toArray();

        const categoryCollection = await mongoose.connection.db.collection("Categories");
        const Catdata = await categoryCollection.find({}).toArray();

        callback(null, data, Catdata);
    } catch (err) {
        console.log("---" + err);
        if (callback) {
            callback(err, null, null);
        } else {
            console.error('Callback function not provided');
        }
    }
};

