// Write your Pizza Builder JavaScript in this file.
let price = document.getElementById('price');
let list = document.getElementById('list');
// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.sauce-white').forEach(function($sauce){
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    }
    else {
      $sauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($crust){
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free')
    }
    else {
      // $crust.style.visibility = "hidden";
      $crust.classList.remove('crust-gluten-free');
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let element = document.querySelectorAll("button");
  let count = 0;
  let keyArr = Object.keys(state);
  for(let i in state){
    if(state[i]){
      element[count].classList.add("active");
      document.getElementById(`list-${keyArr[count]}`).style.display = "block";       
    }
    else{
      element[count].classList.remove("active");
      document.getElementById(`list-${keyArr[count]}`).style.display = "none";
    }
    count++;
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let total = 10;
  let count = 0;
  for(let i in state){
    if(state[i]){
      switch(i){
        case "pepperonni":
        case "mushrooms":
        case "greenPeppers":
          total += 1;
          break;
        case "whiteSauce":
          total += 3;
          break;
        case "glutenFreeCrust":
          total += 5;
          break;
      }
    }   
    count++;
  }

  console.log(total)
  price.innerHTML = total;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
let mushroomBtn = document.querySelector('.btn.btn-mushrooms')

mushroomBtn.onclick = function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
}


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
let greenPepperBtn = document.querySelector('.btn.btn-green-peppers')

greenPepperBtn.onclick = function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
let sauceBtn = document.querySelector('.btn.btn-sauce')

sauceBtn.onclick = function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
let crustBtn = document.querySelector('.btn.btn-crust')

crustBtn.onclick = function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}



