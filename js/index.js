// Iteration 1: Names and Input

const hacker1 = 'Leonardo';
console.log("The driver's name is " + hacker1);
const hacker2 = 'Bruno';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    'The driver has the longest name, it has ' + hacker1.length + ' characters.'
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      hacker2.length +
      ' characters'
  );
} else {
  console.log(
    'Wow, you both have equally long names, ' + hacker1.length + ' characters!'
  );
}

// Iteration 3: Loops
let newName = '';
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase();
}
console.log(newName);

for (let i = hacker1.length; i >= 0; i--) {
  console.log(hacker1[i]);
}

if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker2[0] < hacker1[0]) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
