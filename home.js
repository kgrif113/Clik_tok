let button = document.getElementById("cliktokbutton");
let countertxt = document.getElementById("clicknumber");
console.log(button);
let counter = 0;




button.addEventListener("click", function (event) {
  // audio1.pause();
  let audio1 = new Audio("TBB.mp3");
  audio1.volume = 0.1;
  // audio1.src = "TBB.mp3";

  counter = counter + 1;
  console.log(counter);
  countertxt.textContent = counter;
  audio1.play();
});

let first = document.getElementsByClassName("first");

console.log(first);

// let newvar = document.getElementsByClassName('first')[2];
// let othervar = document.getElementsByClassName('first')[0];
// console.log(newvar);

othervar.addEventListener("click", function (event) {
  counter = counter + 1;
  console.log(counter);
  newvar.textContent = counter;
});



let audio1 = new Audio();
audio1.src = "TBB.mp3";

let


