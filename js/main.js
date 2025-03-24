import parts from "modules/parts.js";
const {part1, part2, part3} = parts;
const button = document.getElementById('review');
const div = document.getElementsByTagName('div')[0];

button.addEventListener('click',prediction);

function prediction () {
    const firstPart = part1[Math.floor(Math.random()*part1.length)];
    const secondPart = part2[Math.floor(Math.random()*part2.length)];
    const thirdPart = part3[Math.floor(Math.random()*part3.length)];
    const prediction = `${firstPart} ${secondPart} ${thirdPart}`;
    /*const elem = document.createElement('p')
    elem.innerHTML = prediction;
    div.appendChild(elem);*/
    div.style.color = 'wheat';
    div.style.fontSize = '18px';
    div.style.fontWeight = 'bold';
    div.innerHTML = prediction;
}