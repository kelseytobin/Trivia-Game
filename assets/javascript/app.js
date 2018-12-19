//global var
var myTimer;
var timeLeft;
var userGuess;
var button;

//questions
var potterQuestions = [{
    question: "What plant does Harry eat to breathe underwater in the Triwizard Tournament?",
    choices: ["Lakeweed", "Gillyweed", "Breatheme", "Mandrake"],
    correct: 1
  },
  {
    question: "Who guards the Gryffindor common room?",
    choices: [
      "The Grey Lady",
      "Moaning Myrtle",
      "The Fat Lady",
      "Nearly Headless Nick"
    ],
    correct: 2
  },
  {
    questions: "What did Hagrid name his dragon?",
    choices: ["Buckbeak", "Fluffy", "Hedwig", "Norbert"],
    correct: 3
  },
  {
    question: "What enchanted object can transport someone to another location?",
    choices: ["Portkey", "A Fireplace", "A Boot", "An Elevator"],
    correct: 0
  },
  {
    question: "How many Deathly Hallows are there?",
    choices: ["7", "5", "3", "4"],
    correct: 2
  }
];

//display trivia function
function displayTrivia() {
  $("#question").html(potterQuestions[0].question);
  question++;
  var choicesArr = potterQuestions[0].choices;
  for (var i = 0; i < choicesArr.length; i++) {
    button = $("<button>");
    button.text(choicesArr[i]);
    button.attr("data-id", i);
    $("#choices").append(button);
  }
  // button.addEventListener("click", () => {
  //   console.log(button);
  // })
};

function startTimer() {
  timeLeft = 31;
  myTimer = setInterval(decrementTimeLeft, 1000);
}

function decrementTimeLeft() {
  timeLeft--;
  updateHTML(timeLeft, "count-down");
}


//updates html
function updateHTML(secs, count) {
  var myTime = document.getElementById(count);
  $("#count-down").html("Time remaining: " + "00:" + secs + " seconds");
  if (secs < 1) {
    clearTimeout(myTimer);
    $("#timer").html("<h2>Times Up!</h2>");
    console.log(secs);
  }
};

// function trackUserInput() {

//   if (userGuess === potterQuestions.correct) {
//     $("#correct").html("Correct! The answer is " + potterQuestions.correct);
//   } else {
//     $("#incorrect").html("Nope! The answer is " + potterQuestions.correct);
//   }
// };


//execute
$(document).ready(function () {
  $("#btn-start").click(function () {
    $("#btn-start").hide();

    displayTrivia();

    startTimer();



  });
});