const baseURL = 'https://pokeapi.co/api/v2/pokemon/1/';

let btn = document.getElementById("pmonMoves");

let pokeMoves = document.getElementById("pokeMoves");



    fetch(baseURL)
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      console.log(json);
      displayMoves(json)
    });
  console.log('this is json');



function displayMoves(pokeman){
    // console.log(pokeman);
    let pokeMon = pokeman.moves
   console.log(pokeMon);
for(let i = 0; i < 20; i++){
    console.log(i);
    let listItem = document.createElement("li");
    listItem.innerHTML = pokeMon[i].move.name 
    pokeMoves.appendChild(listItem);
};
}



