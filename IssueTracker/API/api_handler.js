const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date.js');
const about = require('./about.js');
const issue = require('./issue.js');

const resolvers = {
	Query: {
		about: about.getMessage,
		issueList: issue.getDBIssues
	},
	Mutation: {
		setAboutMessage: about.setAboutMessage,
		issueAdd: issue.dbAddIssue
	},
	GraphQLDate
}

const server = new ApolloServer({
	typeDefs: fs.readFileSync('./schema.graphql', 'utf-8'),
	resolvers,
	formatError: error => {
		console.log(error);
		return error;
	}
})

function installHandler(app) {
	const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
	console.log('CORS setting:', enableCors);
	server.start().then(res => {
		server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
	})
}

module.exports = { installHandler };