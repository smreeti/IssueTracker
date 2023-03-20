const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./dbConnect.js');

async function getDBIssues(_, { status }) {
    // const issues = await Issue.find({});
    // console.log("Issues::::", issues);
    // return Issue.find();
    const db = getDb();
    const filter = {};
    if (status) filter.status = status;
    const issues = await db.collection('issues').find(filter).toArray();
    return issues;
}

function validate(issue) {
    const errors = [];
}

async function dbAddIssue(_, { issue }) {
    issue.id = await getNextSequence('issues');
    // issue.id = 5;
    const db = getDb();
    // validate(issue);

    console.log("To insert:::::::", issue)
    const result = await db.collection('issues').insertOne(issue);

    const savedIssue = await db.collection('issues')
        .findOne({ _id: result.insertedId });
    return savedIssue;
}

module.exports = { getDBIssues, dbAddIssue }
