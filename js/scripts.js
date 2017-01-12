$(document).ready(function() {

  $("#turtlelink").click(function(event){
    $(".hiddeninfo").hide();
    $("#turtles").show();
    event.preventDefault();
  });

  $("#snakelink").click(function(event){
    $(".hiddeninfo").hide();
    $("#snakes").show();
    event.preventDefault();
  });

  $("#lizardlink").click(function(event){
    $(".hiddeninfo").hide();
    $("#lizards").show();
    event.preventDefault();
  });

  $("#froglink").click(function(event){
    $(".hiddeninfo").hide();
    $("#frogs").show();
    event.preventDefault();
  });

});
