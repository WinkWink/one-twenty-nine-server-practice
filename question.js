const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const questions = [
	"what is your name? ",
	"what is your favorite color ?",
	"why do you want to be a web developer? "
];

const collectAnswers = (questions, done) => {
	const answers = [];
	const [firstQuestion] = questions;

	const questionAnswered = answer => {
		answers.push(answer);
		if (answers.length < questions.lengh){
			rl.question(questions[answers.lengh], questionAnswered);
		}else{
			done(answers);
		}
	}

	rl.question(firstQuestion, questionAnswered)

};

collectAnswers(questions, answers => {
	console.log("Thank you for your answers. ");
	console.log(answers);
	process.exit();
});