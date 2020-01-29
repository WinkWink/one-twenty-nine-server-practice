const collectAnswers = require("./lib/collectAnswers");

const questions = [
"what is your name? ",
"what is your favorite color ? ",
"why do you want to be a developer? "
];

collectAnswers(questions, answers => {
	console.log("Thank you for your answers. ");
	console.log(answers);
	process.exit();
});