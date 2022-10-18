import Title from './components/title.js';
import Image from './components/img.js';
import Button from './components/button.js';

const title = new Title();
title.create("Primeira página");

const image = new Image();
image.insertImg();

const btn = new Button();
btn.create();