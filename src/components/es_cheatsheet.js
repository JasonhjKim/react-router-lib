import React, { Component } from 'react';
import styled from 'styled-components';
import Snippet from '../views/snippet';

export default class Es extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
		`
		const Title = styled.h3 `
			margin: 0 1em 1em 1em;
			font-weight: 700;
			font-size: 1.5em;
		`

		const Text = styled.p `
			border-left: 4px solid gray;
			margin: 0 1em 1em 1em;
			padding-left: 0.5em;
			font-size: 0.9em;
		`
		return(
			<Container>
				<Title>ES6 Cheatsheet</Title>
				<Text id="promise">Promises
					<pre>
					- one time guaranteed return of some future value (plaecholder)<br/>- when the value is figured out - the promise is resolved or rejected</pre>
				</Text>
				<Snippet syntax="js" code={
`function displayAtRandomTime() {
  return new Promise(function(res, rej) {
    if(Math.random() > 0.5) {
      res("yes"):
    } else {
      rej("no");
    }
  }, 1000)
}

//accepts an array of promises and resolves all of them or rject once a simgle one of the promises has been first rejected
promise.all([var1, var2, var3]).then(function(movies) {
  return movies.forEach(function(movie) {
    console.log(movie.Year);
  });
});`}/>			
				<Text id="generator">Generator
					<pre>
						- a special kind of function which can pasuse execution and resume at any time <br/>- created using a *<br/>- when invoked, a generator object is returned to us with the keys of value and done<br/>- value is what is returned from the paused function using the yield keyword<br/>
					</pre>
				</Text>
				<Snippet syntax="js" code={`gen = function* pauseAndReturnValue(num) {
  for(let i = 0;i < num; i++) {
    yield i;
  }
}

gen.next() //0 false
gen.next() //1 false
gen.next() //2 false
gen.next() //3 false
gen.next() //4 false
gen.next() //undefined true

for (val of pauseAndReturnValue(3)) {
  console.log(val);
}`} />			
				<Text id="constructor">Constructor & Overloaded Constructor
					<pre>
					</pre>
				</Text>
				<Snippet syntax={"js"} code={
`//Constructor
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
}

function Adult(firstName, lastName, favoriteColor, favoriteAge) {
  Person.call(this, firstName, lastName, favoriteColor);
  this.favoriteAge = favoriteAge;
}

//Overloaded Constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function Motorcycle(make, model, year) {
  Car.call(this, make, model year);
  this.numWheels = 2;
}

function MotorCycle(make, model, year) {
  Car.apply(this,[make, model, year]);
  this.numWheels = 2;
}

function MotorCycle(make, model, year) {
  Car.apply(this, arguments);
  this.numswheels = 2;
}`}/>
				<Text id="inheritance">Inheritance
					<pre>
						passing of methods and properties from one class to another
					</pre>
				</Text>
				<Snippet syntax="js" code={`function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Car(make, model, year) {
    Vehicle.call(this, make, model, year);
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    Vehicle.call(this, make, model, year);
    this.numWheels = 2;
}

Vehicle.prototype.start = function() {
    return "VROOM!";
}

Vehicle.prototype.toString = function() {
    return 'The make, model, and year are ' + this.make + " " + this.model + " " + this.year
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;`}/>

				<Text id="map">Map
					<pre>
						1. creates a new array<br/>2. iterates through an array<br/>3. runs a callback function for each value in the array<br/>4. adds the result of that callback function to the new array<br/>always returns the new array
					</pre>
				</Text>
				<Snippet syntax="js" code={
`var arr = [1, 2, 3];
arr.map(function(value, index, array) {
  return value * 2;
});


function map(arr, callback) {
  var newMap = [];
  for (var i = 0; i < arr.length; i++) {
    newMap.push(callback(arr[i], i, arr));
  }
  return newMap;
  
}`}/>

				<Text id="filter">Filter
					<pre>
					1. creates a new array<br/>2. iterates through an array<br/>3. runs a callback function on each value in the array<br/>4. if the callback function reutrn true, that value will be added to the new array<br/>5. if the callback function return false, that value will ignored from the new array<br/>always return boolean
					</pre>
				</Text>
				<Snippet syntax="js" code={`var arr = [1, 2, 3];
arr.map(function(value, index, array) {
  return value * 2;
});


function map(arr, callback) {
  var newMap = [];
  for (var i = 0; i < arr.length; i++) {
    newMap.push(callback(arr[i], i, arr));
  }
  return newMap;
}`} />

				<Text id="reduce">Reduce
					<pre>1. accepts a callback function and an optional second paramter<br/>2. iterates through an array<br/>3. runs a callback on each value in the array<br/>4. the first parameter to the callback is either the first value in the array or the optioanl second parameter<br/>5. the first parameter to the callback is often called accumulator<br/>6. the returned value from the callback becomes the new value of accumulator<br/>whatever is returned from the callback function becomes the new value of the accumulator
					</pre>
				</Text>
				<Snippet syntax="js" code={`var arr = [5, 4, 1, 4, 5];
arr.reduce(function(acc, nextVal) {
  if (nextVal in acc) {
    acc[nextVal]++;
  } else {
    acc[nextVal] = 1;
  }
  return acc;
}, {}); //intial acc is equal to empty object;`}/>

				<Text id="closure">Closure
					<pre>- a closure is a function that makes use of variables defined in outer functions that have previously returned<br/>- closure only exists when an inner function makes use of variable defined outer function
					</pre>
				</Text>
				<Snippet syntax="js" code={`function outer() {
  var start = "Closures are"
  return function inner() {
    return start + " " + "awesome";
  }
}

function outer(a) {
  return function(b) {
    return a + b;
  }
}
outer(5)(5) = 10;`}/>
			</Container>
		)
	}
}