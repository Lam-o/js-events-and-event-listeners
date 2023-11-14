var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

//add moseover and innerText//

fans.addEventListener("mouseover", function () {
  fans.innerText = "123k";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47k";
});

pets.addEventListener("moseover", function () {
  pets.innerText = "20k";
});
