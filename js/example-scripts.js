var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(add(number1, number2));





var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(subtract(number1, number2));






var divide = function(number1, number2) {
  return number1 / number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(divide(number1, number2));






var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert(multiply(number1, number2));

var BMI= function(number1, number2) {
  return number1/(number2 * number2);
};

var number1 =parseInt(prompt('Enter your weight in kilograms:'));
var number2 =parseInt(prompt('Enter your height in meter:'));

alert(BMI(number1, number2));



var Fahrenheit = function(number1) { return (number1 * 1.8) + 32;};
var number1 = parseInt(prompt("Enter Celsius"));
alert(Fahrenheit(number1));



var liters = function(number1) { return (number1 * 3.78541);};
var number1 = parseInt(prompt("enter gallons"));
alert(liters(number1));
