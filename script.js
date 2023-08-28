var goal, rolls, item, dice;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// display total
function display_total() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
}

// display result
function display_result() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (rolls.reduce((a,b) => a+b, 0) == goal) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'you win';
  } else if (rolls.reduce((a,b) => a+b, 0) < goal) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'keep going';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'you lost';
  }
}

// Describe this function...
function display_the_role() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  rolls.forEach((item) => {
    let element_list4 = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list4.appendChild(new_li);
  });
}

// display info
function display_info() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  display_the_role();
  display_total();
  display_result();
}


goal = 11;
rolls = [];
dice = [1, 2, 3, 4, 5, 6];
display_info();


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  display_info();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  goal = [];
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = 0;
  let element_list2 = document.getElementById('list');
  element_list2.innerText = 'keep playing!';

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  display_info();

});