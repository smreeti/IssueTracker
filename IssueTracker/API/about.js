let aboutMessage = "Testing prog8730 class message";

function setAboutMessage(_, { message }) {
	return aboutMessage = message;
}

function getMessage() {
	return aboutMessage;
}

module.exports = { getMessage, setAboutMessage };
