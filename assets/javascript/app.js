//global var
var myTimer;
var timeLeft;
var input;
var counter = 0;

//questions
var potterQuestions = [{
    question: "What plant does Harry eat to breathe underwater in the Triwizard Tournament?",
    choices: ["Lakeweed", "Gillyweed", "Breatheme", "Mandrake"],
    correct: "Gillyweed",
  },
  {
    question: "Who guards the Gryffindor common room?",
    choices: [
      "The Grey Lady",
      "Moaning Myrtle",
      "The Fat Lady",
      "Nearly Headless Nick"
    ],
    correct: "Moaning Myrtle",
  },
  {
    questions: "What did Hagrid name his dragon?",
    choices: ["Buckbeak", "Fluffy", "Hedwig", "Norbert"],
    correct: "Norbert",
  },
  {
    question: "What enchanted object can transport someone to another location?",
    choices: ["Portkey", "A Fireplace", "A Boot", "An Elevator"],
    correct: "Portkey",
  },
  {
    question: "How many Deathly Hallows are there?",
    choices: ["7", "5", "3", "4"],
    correct: "3",
  }
];

function displayTrivia() {
  startTimer();
  $("#question").html(potterQuestions[counter].question);
  question++;
  var choicesArr = potterQuestions[counter].choices;
  for (var i = 0; i < choicesArr.length; i++) {
    var className = (choicesArr[i]).toString();
    var btn = $("<button>");
    //adds class to the button
    btn.addClass("btn-answer", className);
    //adds a data attribute
    btn.attr("id", potterQuestions[counter].choices[i]);
    //labels button
    btn.text(choicesArr[i]);
    //adds button to the button view div
    $("#answers").append(btn);
    $("#answers").click(function () {
      compare();
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

//compare user input again correct answer
function compare(input) {
  input = $(this).attr("id");
  console.log(input);
  // var correctAnswer = potterQuestions[counter].correct;
  // if (input === correctAnswer) {
  //   console.log("correct");
  // } else {
  //   console.log("wrong");
  // }

};


//execute
$(document).ready(function () {
  $("#btn-start").click(function () {
    $("#btn-start").hide();

    displayTrivia();



  });
});