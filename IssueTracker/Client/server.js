require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static('public'));
// const proxy = require('http-proxy-middleware');

// const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || 'http://localhost:4000/graphql';
// const env = { UI_API_ENDPOINT };

// const apiProxyTarget = process.env.API_PROXY_TARGET;
// if (apiProxyTarget) {
// 	app.use('/graphql', proxy({ target: apiProxyTarget }));
// }

// app.get('/env.js', function (req, res) {
// 	res.send(`window.ENV = ${JSON.stringify(env)}`)
// })

const port = process.env.UI_SERVER_PORT || 3000;

app.listen(port, () => {
	console.log(`Client server started on port ${port}`);
});






