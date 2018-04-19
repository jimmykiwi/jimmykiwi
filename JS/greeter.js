var name = prompt('What is your name?');
var checkName = function(){


if (name === ""){
  name = prompt ('What is your name, for real?')
  checkName(); // runs until name exists
}
}
checkName();

var output = document.querySelector('#greeting');
output.innerHTML = "<p>Stop judging my webpage, " + name + ".</p>";
