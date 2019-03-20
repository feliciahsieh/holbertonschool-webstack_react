import $ from 'jquery';

$(function () {
  $('<h1></h1>').insertAfter('body');
  count = 0;
  wordsArray = ["Holberton School", "HBTN"];
  setInterval(function () {
     count++;
     $("h1").fadeOut(100, function () {
	     $(this).text(wordsArray[count % wordsArray.length]).fadeIn(100);
     });
  }, 2000);
});