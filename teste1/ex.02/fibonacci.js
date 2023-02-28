const prompt = require('prompt-sync')();

let num = prompt("Digite um número:");

let a = 0;
let b = 1;

while (b < num) {
  let temp = b;
  b = a + b;
  a = temp;
}

if (b == num) {
  console.log(`O número ${num} pertence à sequência de Fibonacci!`);
} else {
  console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}

