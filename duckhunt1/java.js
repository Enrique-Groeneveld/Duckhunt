var container = document.getElementById("container")
var duck = document.getElementById("duck")
var left = document.getElementById("left")
var right = document.getElementById("right")
var posLeft = 500

left.addEventListener("click", function(){
console.dir(duck);
posLeft -= 75;
console.log(posLeft)
duck.style.left = posLeft + "px"


})



right.addEventListener("click", function right(){
console.dir(duck);
posLeft += 75;
console.log(posLeft)
duck.style.left = posLeft + "px"


})
