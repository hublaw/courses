document.querySelector("button").addEventListener("click", function () {
  document.body.classList.toggle("purple");
})


//other options
// var isPurple = false;
// document.querySelector("button").addEventListener("click", function () {
//   console.log(isPurple);
//   if(isPurple) {
//     document.body.style.background = "pink";
//     isPurple = false;
//   }
//   else {
//     document.body.style.background = "purple";
//     isPurple = true;
//   }
// })

// var isPurple = false;
// document.querySelector("button").addEventListener("click", function () {
//   console.log(isPurple);
//   if(isPurple) {
//     document.body.style.background = "pink";
//   }
//   else {
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple;
// })
