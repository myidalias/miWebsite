"use strict"

const name = 'world';

function makeUppercase(word){
  return word.toUpperCase();
}

let template =
`<h2> hello ${makeUppercase(name)} </h2>
<p>This is a text template in JavaScript with variables and functions</p>`;

document.getElementById('template').innerHTML = template;