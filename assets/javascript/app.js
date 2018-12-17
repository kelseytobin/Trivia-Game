//create global var
var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var question = 0;

var images;

//create questions as an object
var potterQuestions = [
  {
    question:
      "What plant does Harry eat to breathe underwater in the Triwizard Tournament?",
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
    question:
      "What enchanted object can transport someone to another location?",
    choices: ["Portkey", "A Fireplace", "A Boot", "An Elevator"],
    correct: 0
  },
  {
    question: "How many Deathly Hallows are there?",
    choices: ["7", "5", "3", "4"],
    correct: 2
  }
];

//create timer
//time value of 30000 is set
//time value is inserted into html span div
function triviaTimer(secs, count) {
  var myTime = document.getElementById(count);
  $("#timer").html("Time remaining: " + "00:" + secs + " seconds");
  if (secs < 1) {
    clearTimeout(myTimer);
    $("#timer").html("<h2>Times Up!</h2>");
    //insert correct answer and call next question function?


  }
  secs--;
  var myTimer = setTimeout("triviaTimer("+secs+", "+count")", 30000);
};

//create displayTrivia function
function displayTrivia() {
  triviaTimer();
  //insert first question in question div in html
  $("#question").html(potterQuestions[0].question);
  question++;
  //create var for choices array
  var choicesArr = potterQuestions[0].choices;
  //create for loop to run through choices array
  for (let i = 0; i < choicesArr.length; i++) {
    //create buttons
    var button = $("<button>");
    //insert choices text to buttons
    button.text(choicesArr[i]);
    //store choices data in buttons
    button.attr("data-id", i);
    //insert choices buttons into choices div
    $("#choices").append(button);
  }
}

//user begins playing
$(document).ready(function() {
  //user clicks start, button is then hidden and trivia is displayed
  $("#btn-start").click(function() {
    $(this).hide();
    displayTrivia();
    triviaTimer(30, "timer");
  });
  
});
