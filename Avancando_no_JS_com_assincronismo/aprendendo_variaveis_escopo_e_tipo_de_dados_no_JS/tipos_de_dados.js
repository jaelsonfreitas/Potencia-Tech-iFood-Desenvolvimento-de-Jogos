// +infinity - Ininity e NAn
// Double Precision 64 - bit binary forat IEE 754
let sum = 0.1
let sum2 = 0.3

let soma = sum + sum2

console.log(soma);

// Para declarar strings temos 03 formas
// aspas duplas "..."
// aspas simples  '...'
// template laterals `...`

// convensão aspas simples e para concatenar coisas com template literals

const id = 20;

console.log('<div id = "' + id +'"> teste <div>');
console.log(`<div id = "${id}"> test <div>`);


// synbol
// OBJETOS UNICOS

const x = Symbol('10');
const y = Symbol('10');
console.log(x === y);