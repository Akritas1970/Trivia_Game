//The script for the Trivia Game

var number = 120;
var intervalId;
var question1 = "What is your name?"
var answers1 = ""

//document.getElementById("begin").addEventListener("click", function run() {
       
 $("#begin").on("click", function(){
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
     
     function decrement() {

      number--;

      $("#time").html("Time Remaining: " + "<h3>" + number + "</h3>");

      if (number === 0) {

        stop();

        alert("Time Up!");
      }
       
    }
    
   
   


    run();
 });
  $("#begin").on("click", function(){
    $("#questionArea").show();
  });