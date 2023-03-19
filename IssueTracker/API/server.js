require('dotenv').config();
const express = require('express');

const { dbConnect, seedData } = require('./dbConnect.js');
const { installHandler } = require('./api_handler.js');

const app = express();

const port = process.env.API_SERVER_PORT || 4000;

installHandler(app);

(async function () {
	try {
		await dbConnect();
		await seedData();

		app.listen(port, function () {
			console.log(`API server started on port ${port}`);
		});
	} catch (err) {
		console.log('ERROR:', err);
	}
}());





