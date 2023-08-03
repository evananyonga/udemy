Udemy Web Developer Bootcamp
This is not a drill!!

##Datatypes and Structures in JavaScript
* Integers,
* Strings,
* Booleans,
* Floats,
* _null, unavailable_
* Arrays
* Nodelist // The result of using the selector: var tags  = document.getElementsByClassName("some-class");

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

###The DOM
####Manipulating the DOM

<!-- You can use things like query selectors -->
```
	var item1 = document.querySelector('h1');
	item1.style.color = "pink";

```
<!-- You can use functions to manipulate the DOM -->

```
	var bodi = document.querySelector('body');
	var isBlue = false;

	setInterval(function() {
		if(isBlue) {
			bodi.style.background === "#FFFFFF";
		} else {
			bodi.style.background === "#3498db";			
		}
		isBlue = !isBlue;
	}, 1000);
```

<!-- Other querySelectors that can manipulate the DOM -->
Query selector always selects the first item with the specified ID/class

```
	document.getElementById("someId");
	document.getElementsByClassName("some-class");
	document.getElementsByTagName("li");
	document.querySelector('#someId');
	document.querySelector('.someClass');
	document.querySelector('li a.special');
	document.querySelectorAll('.someClass');

```
#####Changing an element's style
######Manually by using the style property
```
var tag = document.getElementById('highlight');
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```
Or Instead of using the above method, we can use classList
With a css class defined,
```
.some-class {
	color = "blue";
	border = "10px solid red";
	fontSize = "70px";
	background = "yellow";
	marginTop = "200px";
}
var tag = document.getElementById('highlight');
tag.classList.add("some-class");
tag.classList.remove("some-class");
tag.classList.toggle("some-class");
```

#####Adding/removing classes
#####Changing the content of a tag
#####Changing attributes(src, href, etc)


#####Changing an element's text
```
var tag = document.querySelector('p');
tag.textContent = "blah blah blah"
```

```
var tag = document.querySelector('p');
tag.innerHTML = "blah blah blah"
```

#####Changing an element's attributes
e.g href, src. This can be used in manipulating a slider to get different images by changing the src of an image

```
<a href="www.google.com">Link to Google</a>
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("src", "http://github.com");
```