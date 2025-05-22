

 //home page hero section text animation
let para = "Your Shortcut to Concept Clarity.";
let i = 0;
let interval = setInterval(function () {
  document.querySelector("main h2").innerHTML += para.charAt(i);
  i++;

  // Stop when all characters are typed
  if (i > para.length) {
    clearInterval(interval);
  }
  console.log("mm");
}, 40);


