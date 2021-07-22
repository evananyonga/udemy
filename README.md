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
