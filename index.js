const readlineSync = require('readline-sync');
const scores = require('./scores');
var score = 0;

const myName = readlineSync.question('What is your name ? ');
console.log(`Welcome ${myName} !`);

const age = readlineSync.question('What is your age ? ');
console.log(age > 25 ? 'Right' : 'Wrong');

const city = readlineSync.question('What is your city ? ').toLowerCase();

if (city === 'coimbatore') {
	score++;
}

displayScore();

function displayScore() {
	console.log(`Your current score is: ${score}`);
}

const num1 = parseInt(readlineSync.question('Enter number 1: '));
const num2 = parseInt(readlineSync.question('Enter number 2: '));
console.log(`Addition of two numbers are: ${add(num1, num2)} `);

function add(num1, num2) {
	return num1 + num2;
}

const questions = [
	{
		question: 'What is your favourite colour ? ',
		answer: 'green',
	},

	{
		question: 'What is your favourite marvel character ? ',
		answer: 'captain america',
	},

	{
		question: 'What is your favourite morning drink ? ',
		answer: 'coffee',
	},

	{
		question: 'What is 2+2 ? ',
		answer: '4',
	},

	{
		question: 'What makes everyone unite together ? ',
		answer: 'hope',
	},
];

askQuestions(questions);

function askQuestions(questions) {
	for (let i = 0; i < questions.length; i++) {
		const answer = readlineSync.question(questions[i]['question']);
		if (answer.toLowerCase() === questions[i].answer) {
			score++;
			console.log('Correct answer !');
		} else console.log('Wrong answer !');
	}
}

scores.push(score);
displayScore();
console.log(`Your current high score is: ${Math.max(...scores)}`);
console.log('Do send a screenshot if you have beaten your old high score !');
