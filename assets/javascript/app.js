//create global var
var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var question = 0;

var images;

var timeCount = 30;


//create questions as an object
var questions = [{
  question: "What plant does Harry eat to breathe underwater in the Triwizard Tournament?",
  choices: ["Lakeweed", "Gillyweed", "Breatheme", "Mandrake"],
  correct: 1
}, {
  question: "Who guards the Gryffindor common room?",
  choices: ["The Grey Lady", "Moaning Myrtle", "The Fat Lady", "Nearly Headless Nick"],
  correct: 2
}, {
  questions: "What did Hagrid name his dragon?",
  choices: ["Buckbeak", "Fluffy", "Hedwig", "Norbert"],
  correct: 3
}, {
  question: "What enchanted object can transport someone to another location?",
  choices: ["Portkey", "A Fireplace", "A Boot", "An Elevator"],
  correct: 0
}, {
  question: "How many Deathly Hallows are there?",
  choices: ["7", "5", "3", "4"],
  correct: 2
}];