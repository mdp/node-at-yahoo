var sys = require('sys');
var fs = require('fs');
var colors = require('colors');

var font = 'Colossal';
var logo = fs.readFileSync('./logo.txt').toString();

fs.readFile('./hiring.txt', function (err, data) {
  sys.puts(logo.magenta);
  sys.puts(data.toString().blue);
});

