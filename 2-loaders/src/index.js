import Title from './components/title.js';
import Image from './components/img.js';
import Button from './components/button.js';
import Warning from './templates/warning.html';
import Txt from './files/texto.txt';
import Descricao from './files/descricao.json';

const title = new Title();
title.create("Primeira página");

const image = new Image();
image.insertImg();

const btn = new Button();
btn.create();

// babel spreads
const obj = {a: 1, b:2, c:3, d:4};

let {a, b, ...teste} = obj;
console.log(a);
console.log(b);
console.log(teste);

// html
const body = document.querySelector('body');
body.innerHTML += Warning;

// import arquivo texto
const text = Txt;
console.log(text);

// import arquivo json
const desc = Descricao;
console.log(desc);
