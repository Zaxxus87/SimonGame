var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click( function (){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    var sound = "sounds/" + userChosenColor + ".mp3";
    playAudio(sound); 
});




function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+"randomChosenColor").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var sound = "sounds/" + randomChosenColor + ".mp3";
    playAudio(sound);
}

function playAudio(url) {
  new Audio(url).play();
}

