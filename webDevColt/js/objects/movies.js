var movies = [
  {
    name: "In Bruges",
    rating: 5,
    hasSeen: true
  },
  {
    name: "Frozen",
    rating: 4.5,
    hasSeen: false
  },
  {
    name: "Mad Max Fury Road",
    rating: 5,
    hasSeen: true
  },
  {
    name: "Les Miserables",
    rating: 3.5,
    hasSeen:  false
  }
]

movies.forEach(function(movie) {
  var watched;
  watched = movie.hasSeen ? "seen" : "not seen";
  console.log(`You have ${watched} "${movie.name}" - ${movie.rating} stars`);
});

// order of event handlers is not definable! The below handler will render the
// alert before the style change! Jquery can be used to define order
var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
  h1.style.fontSize = "100px";
  alert("header clicked!");
})

// Can also be written as:
// document.querySelector("h1").addEventListener("click", function() {
//   this.style.fontSize = "100px";
//   alert("header clicked!");
// })
