import $ from 'jquery';

let textArray = ["HBTN", "Holberton School"];
let count = 0;

function toggleText() {
    $('h1').text(textArray[count % 2]);
    count++;
};

setInterval(toggleText, 2000);
