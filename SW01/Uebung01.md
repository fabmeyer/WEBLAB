# WEBLAB: Uebung 1
## Author: Fabian Meyer
```javascript
"use strict";
```
## Variablen Definitionen
```javascript
var a = 1;
var b = 1.1;
var c = true;
var d = "Hallo";
var e;

var myObject = {
  name: "Fabian",
  number: 101,
}
console.log(myObject); // logs myObject as JSON

var myNumbers = {
  one: 1,
  two: 2,
  three: 3,
}
console.log(myNumbers);

var myMixedArray = {
  string: "Hello",
  number: 303,
}

var myFunction = function(a, b, c) {
  return (a + b * c);
}

console.log(typeof(a)); // number
console.log(typeof(b)); // number
console.log(typeof(c)); // boolean
console.log(typeof(d)); // string
console.log(typeof(e)); // undefined (var e created without a value)
console.log(typeof(f)); // undefined (no var f created)
console.log(typeof(myObject)); // object
console.log(typeof(myFunction())); // number

console.log(myFunction(1, 2, 3)); // 7
```
## Array Definitionen
```javascript
var myColourArray = ["green", "white", "grey", "blue"];
console.log(myColourArray);
console.log(typeof(myColourArray));
myColourArray.push("pink");
console.log(myColourArray); // works
myColourArray.pop();
console.log(myColourArray); // works
var myColours = myColourArray.join(); // creates a string
// from all strings in array
console.log(myColours);
myColourArray.sort(); // sorting array
console.log(myColourArray);
// iterator through array
myColourArray.forEach(function(item, index) {
  console.log(item, index);
});

// TODO
// ???
// var myNumberArray = [1, 2, 3];
// var myArrayLength = myNumberArray.length;
// var sumOfSquares = myNumberArray.reduce(function(x, y) {
//   for (var i = 0; i < myArrayLength; i++) {
//     myNumberArray[i] = myNumberArray[i] * myNumberArray[i];
//   }
//   console.log(myNumberArray);
//   return x + y;
// }, 0);
// console.log(sumOfSquares);

var printProperties = function(obj) {
  var propValue;
  for (var propName in obj) {
    propValue = obj[propName];
    console.log(propName + ": " + propValue);
  }
}
// object creation via object literal method
var person1 = {
  firstName: "Fabian",
  lastName: "Meyer",
  age: 30,
  height: 188
}
console.log(person1.hasOwnProperty("firstName")); // true
printProperties(person1); // works

// object creation via object constructor method
var person2 = new Object();
person2.firstName = "Livio";
person2.lastName = "Meyer";
printProperties(person2); // works
// date object creation via date constructor method
var date1 = new Date("February 21, 2018 10:50");
console.log(date1); // works

// creating interval object with 3 variables
function myIntervalFunction(startValue, endValue) {
  this.startValue = startValue;
  this.endValue = endValue;
}

// creating function to evaluate if value is in interval
function isInside(toEvaluate) {
  this.toEvaluate = toEvaluate;
  if (this.toEvaluate >= this.startValue && this.toEvaluate <= this.endValue) {
    return true;
  } else {
    return false;
  }
}
// append function to object
myIntervalFunction.prototype.isInside = isInside;
// setting up an object of type myIntervalFunction
var myIntervalObject1 = new myIntervalFunction(10, 20);
console.log(myIntervalObject1.isInside(10)); // works

// function mult as function declaration statement
function mult1(x, y) {
  return x * y;
}
// function as literal / function expression
var mult2 = function(x, y) {
  return x * y;
}

// simple factorial function
var factorialSimple = function(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * factorialSimple(x - 1);
  }
}
console.log(factorialSimple(5)); // works

// memoization function wrapper
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    } else {
      console.log('Calculating result', n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
const factorial = memoize(
  (x) => {
    if (x === 0) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
);
console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5
```
## Closures und Objekt-Hierarchien
### 1. Closures
```javascript
var myStack = {
  arr: [],
  counter: 0,
  push: function(obj) {
    this.arr[this.counter] = obj;
    this.counter++;
  },
  pop: function() {
    if (this.counter === 0) {
      return undefined;
    } else {
      this.counter--;
      var result = this.arr[this.counter];
      delete this.arr[this.counter];
      return result;
    }
  }
}
console.log(myStack);
myStack.push(1); // works
console.log(myStack);
myStack.push(2);
console.log(myStack);
console.log(myStack.pop()); // works
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);

// lösung:
// var stack = (function() {
//   var data = [];
//   return {
//     push: function (item) {
//       data.push(item);
//     }
//     pop: function () {
//       return
//     }
//   };
// }());
```
### 2. Objekt Hierarchien
```javascript
// super class constructor
function Shape() {}
// super class printing function
Shape.prototype.draw = function() {}

// circle
function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}
Circle.prototype = new Shape();
Circle.prototype.draw = function() {
  return "x: " + this.x + " y: " + this.y + " r: " + this.r;
}
// test circle
var c1 = new Circle(0, 0, 5);
console.log(c1.draw());

// rectangle
function Rectangle(x, y, width, heigth) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.heigth = heigth;
}
Rectangle.prototype = new Shape();
Rectangle.prototype.draw = function() {
  return "x: " + this.x + " y: " + this.y +
    " width: " + this.width + " heigth: " + this.heigth;
}
// test rectangle
var r1 = new Rectangle(0, 0, 10, 20);
console.log(r1.draw());

// add area property
Shape.area = function() {}
Circle.prototype.area = function() {
  return "area: " + (this.r ** 2 * Math.PI);
}
Rectangle.prototype.area = function() {
  return "area: " + (this.width * this.heigth);
}
// test area
console.log(c1.area()); // works
console.log(r1.area()); // works

// serialize
var jsonc1 = JSON.stringify(c1, null, ' ');
console.log(jsonc1); // works
var jsonr1 = JSON.stringify(r1, null, ' ');
console.log(jsonr1); // works
```
### Was ist der Unterschied zwischen Objekt-Hierarchien in JavaScript und Vererbung in anderen OO Programmiersprachen? Was sind die Vor- und Nachteile?

Der wichtigste Unterschied ist, dass in JavaScript alles ein Objekt ist,
z.B. auch Funktionen (first-class functions).
Dies wiederum bedeutet, dass in JS auch Funktionen abgeleitet werden können
(im Gegensatz zu z.B. Java).
In JS existieren auch keine Klassen, sondern nur Objekte.

Die Vererbung erfolgt in JS mithilfe von prototypes (im Gegensatz zu Klassen
bei Java). Bei JS hat jedes Objekt einen prototype (prototype chain),
falls vorher keines definiert wurde, ist "Object" der prototype davon.
(Object selber hat den prototype null, null wiederum hat keinen prototype).
JS sucht bei Variablen, die im Objekt nicht gefunden wurden die Variablen
des prototypes ab (callback).

Vorteil der Vererbung bei JS: Da Klassen wegfallen und jedes Objekt als
prototype dienen kann, ist die Vererbung bei JS einfacher, mächtiger und man
braucht weniger Code zu schreiben.
