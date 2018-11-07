

function sayHello(){
  var p = document.getElementById("hello");
  p.innerHTML = "Hello, World!";
}

function popHello(){
  alert("Hello, World!");
}

function consoleHello(){
  console.log("Hello, World!");
}

function inputHello(){
  var stranger = prompt("Hello! What's your name?");
  var p = document.getElementById("stranger");
  p.innerHTML = "Hello, " + stranger;
}
