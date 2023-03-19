const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_URL = process.env.DB_URL || "mongodb+srv://smriti:smriti@cluster0.suhuj.mongodb.net/IssueTracker?retryWrites=true&w=majority"

let db;

const issueDB = [
    {
        id: 1, status: 'New', owner: 'Ravan', effort: 5,
        created: new Date('2018-08-15'), due: undefined,
        title: 'Error in console when clicking Add',
    }, {
        id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
        created: new Date('2018-08-16'), due: new Date('2018-08-30'),
        title: 'Missing bottom border on panel',
    },
    {
        id: 3, status: 'Open', owner: 'John', effort: 1,
        created: new Date('2023-01-18'), due: new Date('2023-08-30'),
        title: 'This is my first issue',
    }
];

const dbConnect = async () => {
    const client = new MongoClient(MONGO_URL, { useNewUrlParser: true });
    await client.connect();
    console.log('Connected to MongoDB at', MONGO_URL);
    db = client.db();
}

function getDb() {
    return db;
}

async function getNextSequence(name) {
    const result = await db.collection('counters').findOneAndUpdate(
        { _id: name },
        { $inc: { current: 1 } },
        { returnOriginal: false },
    );
    return result.value.current;
}

// const dbConnect = () => {
//     mongoose.connect(MONGO_URL,
//         { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
//             if (error) {
//                 console.log(error);
//                 console.log("Connection failed");
//             } else {
//                 console.log("Connected to the database");
//             }
//         });
// }

async function seedData() {
    await db.collection('issues').deleteMany({});
    await db.collection('counters').deleteMany({});
    await db.collection('issues').insertMany(issueDB);
    await db.collection('counters').insertOne({ _id: 'issues', current: 3 });
}
module.exports = { dbConnect, getDb, seedData, getNextSequence }