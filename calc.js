$(document).ready(function() {
  function toScreen() {
    $("#screen").text(showScreen);
  }
  var showScreen = "";
  var sum = 0;
  $("#one").click(function() {
    showScreen += "1";
     toScreen();
  });
  $("#two").click(function() {
    showScreen += "2";
    toScreen();
  });
  $("#three").click(function() {
    showScreen += "3";
    toScreen();
  });
  $("#four").click(function() {
    showScreen += "4";
    toScreen();
  });
  $("#five").click(function() {
    showScreen += "5";
    toScreen();
  });
  $("#six").click(function() {
    showScreen += "6";
    toScreen();
  });
  $("#seven").click(function() {
    showScreen += "7";
    toScreen();
  });
  $("#eight").click(function() {
    showScreen += "8";
    toScreen();
  });
  $("#nine").click(function() {
    showScreen += "9";
    toScreen();
  });
  $("#zero").click(function() {
    showScreen += "0";
    toScreen();
  });
  $("#dec").click(function() {
    showScreen += ".";
     toScreen();
  });
  $("#add").click(function() {
    showScreen += "+";
    toScreen();
  });
  $("#sub").click(function() {
    showScreen += "-";
    toScreen();
  });
  $("#times").click(function() {
    showScreen += "*";
    toScreen();
  });
  $("#div").click(function() {
    showScreen += "/";
    toScreen();
  });
  $("#mod").click(function(){
    showScreen += "%";
    toScreen();
  })
  $("#clear").click(function() {
    showScreen = "";
    toScreen();
  })
  $("#equal").click(function() {
    sum = eval(showScreen);
    showScreen = sum.toString();
    toScreen();
  });
  $("#back").click(function(){
    showScreen = showScreen.slice(0, -1);
    toScreen();
  });

});