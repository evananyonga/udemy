Udemy Web Developer Bootcamp
This is not a drill!!

##Datatypes and Structures in JavaScript
* Integers,
* Strings,
* Booleans,
* Floats,
* _null, unavailable_

##Useful builtin functions in JavaScript
**alert(), prompt()**

##Loops and Conditionals
######Boolean logic
comparison operators: _>, >=, <, <=, ==, !=, ===, !==_
== operator performs type coercion
The === operator is more specific and encouraged to use in comparisons

Logical operators: _&&, ||, !_

######Conditionals
Making decisions with code
If, Else if, if

```
	for (let i = -10; i <= 19; i++) {
  		console.log(i);
	}
```


#####Functions
Understanding Functions
Declaring functions

```
	function doSomething() {
		console.log("Hello World")
	}

```
calling a function

```
	doSomething()

```

Using the ``` return ``` keyword and functions with arguments

```
	function doSum(num) {
		return num * 2
	}

```

######Function Declaration vs Function expression
A Function Declaration does not require variable assignment whilst a function expression can be a named function or an anonymous function

```
	//anonymous function expression
	var a = function() {
		return 3;
	}

	//named function expression
	var a = function bar() {
		return 3;
	}

	//self invoking function expression
	(function sayHello() {
		alert("hello!");
	})();

```
###Arrays
Arrays are used to store a list of items. Arrays help us do things like iterations for example going through a list of comments on reddit to display each of them.

```
	// for Loops
	for (let i = 0, i > 2, i++) {
		console.log(i);
	}

	// forEach (A smarter and leaner implementation of the for loop)
	// arr.forEach(someFunction)

	fruits = ["oranges", "apples", "mangoes", "kiwi"]

	fruits.forEach(function(colors) {
			console.log(colors)
		})
```
###JavaScript Objects
A data structure that stores data in key-value pairs

```
	var person = {
		name: "Travis",
		age: 31,
		city: "Kla"
	}

	<!-- how to access objects -->
	// Using the bracket notation
	person["name"]

	// Using dot notation
	person.city

	```

You can reassign an object's property using the '=' sign e.g
```
	person.age = 45

```
You can iniitailise objects in many ways:
<!-- all at once -->
```
	var person = {
		name: "Travis",
		age: 31,
		city: "Kla"
	}

```
<!-- Using an empty object -->
```
	var person = {};
	person.name = 'Travis';
	person.age = 32;
	person.city = "Kampala"

```
<!-- using object keyword -->
```
	var person = new Object();
	person.name = 'Travis';
	person.age = 32;
	person.city = "Kampala"

```
