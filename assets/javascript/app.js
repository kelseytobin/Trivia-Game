//global var
var myTimer;
var timeLeft;
var input;
var counter = 0;

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
  startTimer();
  $("#question").html(potterQuestions[counter].question);
  question++;
  var choicesArr = potterQuestions[counter].choices;
  for (var i = 0; i < choicesArr.length; i++) {
    var button = $("<button>");
    button.text(choicesArr[i]);
    button.data("id", i);
    $("#choices").append(button);
    $(button).click(function() {
      input = button.data("id");
    })
  }
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
  }
};

function compare(input) {
//   if (input === potterQuestions[counter].correct) {
//     $("#correct").html("Correct! The answer is " + potterQuestions[counter].correct);
//     counter++;
//   } else {
//     $("#incorrect").html("Nope! The answer is " + potterQuestions[counter].correct);
//     counter++;
//   }
};


//execute
$(document).ready(function () {
  $("#btn-start").click(function () {
    $("#btn-start").hide();

    displayTrivia();

    // compare();



  });
});