//global var
var myTimer;
var timeLeft;
var input;
var counter = 0;

//questions
var potterQuestions = [{
    question: "What plant does Harry eat to breathe underwater in the Triwizard Tournament?",
    choices: ["Lakeweed", "Gillyweed", "Breatheme", "Mandrake"],
    correct: 1,
  },
  {
    question: "Who guards the Gryffindor common room?",
    choices: [
      "The Grey Lady",
      "Moaning Myrtle",
      "The Fat Lady",
      "Nearly Headless Nick"
    ],
    correct: 2,
  },
  {
    questions: "What did Hagrid name his dragon?",
    choices: ["Buckbeak", "Fluffy", "Hedwig", "Norbert"],
    correct: 3,
  },
  {
    question: "What enchanted object can transport someone to another location?",
    choices: ["Portkey", "A Fireplace", "A Boot", "An Elevator"],
    correct: 0,
  },
  {
    question: "How many Deathly Hallows are there?",
    choices: ["7", "5", "3", "4"],
    correct: 2,
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
    btn.data("answer", potterQuestions[counter].choices[i]);
    //labels button
    btn.text(choicesArr[i]);
    //adds button to the button view div
    $("#answers").append(btn);
   
  }

   $(".btn-answer").click(function (event) {
    input = $(this).data("answer");
    console.log($(this).data("answer"));
     compare(input);
   })
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

// compare user input again correct answer
function compare(input) {
  var currentQuestion = potterQuestions[counter];
  
  var correctAnswer = currentQuestion.choices[currentQuestion.correct];
  
  if (input === correctAnswer) {
    console.log("correct");
  } else {
    console.log("wrong");
  }

};


//execute
$(document).ready(function () {
  $("#btn-start").click(function () {
    $("#btn-start").hide();

    displayTrivia();



  });
});