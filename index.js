const readlineSync = require('readline-sync');
var score = 0;

const myName = readlineSync.question('What is my name ? \n');
console.log(`Welcome ${myName} !\n`);

const age = readlineSync.question('What is my age ? \n');
console.log(age > 25 ? 'Right \n' : 'Wrong \n');

const city = readlineSync.question('Where is my city located ? \n').toLowerCase();

if (city === 'coimbatore') {
	score++;
}

displayScore();

function displayScore() {
	console.log(`Your current score is: ${score} \n`);
}

const questions = [
	{
		question: 'What is my favourite colour ? \n',
		answer: 'green',
	},

	{
		question: 'What is my favourite marvel character ? \n',
		answer: 'captain america',
	},

	{
		question: 'What is my favourite morning drink ? \n',
		answer: 'coffee',
	},

	{
		question: 'What is my favourite toy ? \n',
		answer: 'buzz lightyear',
	},

	{
		question: 'What is my favourite word ? \n',
		answer: 'hope',
	},
];

askQuestions(questions);

function askQuestions(questions) {
	for (let i = 0; i < questions.length; i++) {
		const answer = readlineSync.question(questions[i]['question']);
		if (answer.toLowerCase() === questions[i].answer) {
			score++;
			console.log('Correct answer !\n');
		} else console.log('Wrong answer !\n');
	}
}


displayScore();


