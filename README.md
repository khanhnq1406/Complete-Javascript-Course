# [![My Skills](https://skills.thijs.gg/icons?i=js)](https://skills.thijs.gg) The Complete JavaScript Course 2022: From Zero to Expert!

This is my learning process with course "The Complete JavaScript Course 2022: From Zero to Expert!" by Jonas Schmedtmann which I will take notes here &#128221;
<br />Go to my handwritten notes , [click here!!!&#9997;](https://drive.google.com/file/d/1oQ2O_sz3jeOzOfINAHvix_wLeuYHvBYs/view?usp=sharing)

## Table of contents

- [ The Complete JavaScript Course 2022: From Zero to Expert!](#-the-complete-javascript-course-2022-from-zero-to-expert)
  - [Table of contents](#table-of-contents)
  - [JavaScript Fundamentals – Part 1](#javascript-fundamentals--part-1)
    - [Var, Let, and Const](#var-let-and-const)
      - [**Var**](#var)
      - [**Let**](#let)
      - [**Const**](#const)
    - [Basic operators](#basic-operators)
      - [**Arithmetic Operators**](#arithmetic-operators)
      - [**Assignment Operators**](#assignment-operators)
  - [**Comparison Operators**](#comparison-operators)
      - [**Logical Operators**](#logical-operators)
      - [**Type Operators**](#type-operators)
      - [**Bitwise Operators**](#bitwise-operators)
    - [Truthy and Falsy Values](#truthy-and-falsy-values)
    - [Equality Operators: == vs. ===](#equality-operators--vs-)
  - [JavaScript Fundamentals – Part 2](#javascript-fundamentals--part-2)
    - [Strict mode](#strict-mode)
    - [Arguments vs Parameters](#arguments-vs-parameters)
    - [Function Declarations vs. Expressions](#function-declarations-vs-expressions)
      - [The first difference: a name](#the-first-difference-a-name)
      - [Hoisting](#hoisting)
      - [Summary](#summary)
  - [Developer Skills \& Editor Setup](#developer-skills--editor-setup)
    - [Some extensions in VSCode](#some-extensions-in-vscode)
    - [Learning How to Code](#learning-how-to-code)
    - [4 steps to solve any problem](#4-steps-to-solve-any-problem)
  - [HTML \& CSS](#html--css)
    - [HTML](#html)
      - [Element](#element)
      - [HTML tag](#html-tag)
        - [HTML Headings](#html-headings)
        - [HTML Paragraphs](#html-paragraphs)
        - [HTML Links](#html-links)
        - [HTML Images](#html-images)
      - [HTML Attributes](#html-attributes)
    - [The CSS Box Model](#the-css-box-model)
  - [DOM and Event Fundamentals](#dom-and-event-fundamentals)
    - [The HTML DOM (Document Object Model)](#the-html-dom-document-object-model)
    - [Selecting and Manipulating Elements](#selecting-and-manipulating-elements)
    - [Handling Click Events](#handling-click-events)
    - [Manipulating CSS Styles](#manipulating-css-styles)
    - [Working with Classes](#working-with-classes)
      - [Remove](#remove)
      - [Add](#add)
      - [Contains](#contains)
    - [Handling a keypress event](#handling-a-keypress-event)
    - [Change src attribute](#change-src-attribute)
    - [Container add html from javascript](#container-add-html-from-javascript)
  - [Data Structures, Modern Operators and Strings](#data-structures-modern-operators-and-strings)
    - [Destructuring](#destructuring)
    - [Spread](#spread)
    - [Rest Parameters](#rest-parameters)
    - [Conclusion](#conclusion)
    - [Reference](#reference)
  - [How Javascript Works Behind the Scenes](#how-javascript-works-behind-the-scenes)
    - [The Javascript Engine and Runtime](#the-javascript-engine-and-runtime)
      - [Javascript Engine](#javascript-engine)
      - [Compilation vs. Interpretation vs. Just-in-time (JIT) compilation](#compilation-vs-interpretation-vs-just-in-time-jit-compilation)
      - [Modern Just-in-time compilation of javascript](#modern-just-in-time-compilation-of-javascript)
      - [Javascript runtime](#javascript-runtime)
    - [Execution Contexts and The Call Stack](#execution-contexts-and-the-call-stack)
      - [Execution Context](#execution-context)
      - [Call Stack](#call-stack)
    - [Scope and The Scope Chain](#scope-and-the-scope-chain)
      - [Scope](#scope)
      - [Global scope](#global-scope)
      - [Local scope](#local-scope)
      - [Function Scope](#function-scope)
      - [Lexical Scope](#lexical-scope)
      - [Closures](#closures)
    - [The call and apply Methods](#the-call-and-apply-methods)
    - [The bind Method](#the-bind-method)
    - [Immediately invoked function expression](#immediately-invoked-function-expression)
  - [Asynchronous Javascript: Promises, Async/Await, and AJAX](#asynchronous-javascript-promises-asyncawait-and-ajax)
    - [Asynchronous Javascript, AJAX and APIs](#asynchronous-javascript-ajax-and-apis)
      - [Synchronous code](#synchronous-code)
      - [Asynchronous code](#asynchronous-code)
      - [What is AJAX calls?](#what-is-ajax-calls)
      - [API](#api)
      - [XMLHttpRequest](#xmlhttprequest)
    - [Promises and the Fetch API](#promises-and-the-fetch-api)
      - [Promises](#promises)
      - [The promises lifecycle](#the-promises-lifecycle)
    - [Consuming Promises](#consuming-promises)
      - [Chaining promises](#chaining-promises)
    - [Handling Rejected Promises](#handling-rejected-promises)
      - [Method 1: Using callback function](#method-1-using-callback-function)
      - [Method 2: Using `.catch()` method](#method-2-using-catch-method)
    - [Throwing Errors Manually](#throwing-errors-manually)
    - [Asynchronous Behind the Scenes: The Event Loop](#asynchronous-behind-the-scenes-the-event-loop)
      - [Some definitions](#some-definitions)
      - [How does asynchronous JavaScript work behind the scenes?](#how-does-asynchronous-javascript-work-behind-the-scenes)
    - [Building a simple promise](#building-a-simple-promise)
      - [Reference](#reference-1)
    - [Async/Await](#asyncawait)
    - [Error Handling with try...catch](#error-handling-with-trycatch)
    - [Returning Values from Async Function](#returning-values-from-async-function)
    - [Running Promises in Parallel](#running-promises-in-parallel)
    - [Other Promise Combinators: race, allSettled and any](#other-promise-combinators-race-allsettled-and-any)
      - [Promise.race()](#promiserace)
      - [Promise.allSettled()](#promiseallsettled)
      - [Promise.any()](#promiseany)
      - [Reference](#reference-2)
  - [Links bibliography](#links-bibliography)

## JavaScript Fundamentals – Part 1

### Var, Let, and Const

#### **Var**

- Scope essentially means where these variables are available for use. Var declarations are globally scoped or function/locally scoped.
- **Var variables can be re-declared and updated**.

#### **Let**

- A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. So a variable declared in a block with let is only available for use within that block.
- **Let can be updated but not re-declared.**

#### **Const**

- Variables declared with the const maintain constant values.
- Like let declarations, const declarations can only be accessed within the block they were declared.
- **Const cannot be updated or re-declared**

### Basic operators

#### **Arithmetic Operators**

| Operator | Description                  |
| -------- | ---------------------------- |
| +        | Addition                     |
| -        | Subtraction                  |
| \*       | Multiplication               |
| \*\*     | Exponentiation (ES2016)      |
| /        | Division                     |
| %        | Modulus (Division Remainder) |
| ++       | Increment                    |
| --       | Decrement                    |

#### **Assignment Operators**

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

## **Comparison Operators**

| Operator | Description                       |
| -------- | --------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| <        | less than                         |
| >=       | greater than or equal to          |
| <=       | less than or equal to             |
| ?        | ternary operator                  |

#### **Logical Operators**

| Operator | Description |
| -------- | ----------- |
| &&       | logical and |
| \|\|     | logical or  |
| !        | logical not |

#### **Type Operators**

| Operator   | Description                                                |
| ---------- | ---------------------------------------------------------- |
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |

#### **Bitwise Operators**

| Operator | Description          | Example | Same as      | Result | Decimal |
| -------- | -------------------- | ------- | ------------ | ------ | ------- |
| &        | AND                  | 5 & 1   | 0101 & 0001  | 0001   | 1       |
| \|       | OR                   | 5 \| 1  | 0101 \| 0001 | 0101   | 5       |
| ~        | NOT                  | ~ 5     | ~0101        | 1010   | 10      |
| ^        | XOR                  | 5 ^ 1   | 0101 ^ 0001  | 0100   | 4       |
| <<       | left shift           | 5 << 1  | 0101 <<img 1 | 1010   | 10      |
| >>       | right shift          | 5 >> 1  | 0101 >> 1    | 0010   | 2       |
| >>>      | unsigned right shift | 5 >>> 1 | 0101 >>> 1   | 0010   | 2       |

### Truthy and Falsy Values

5 falsy values: 0, '', undefined, null, NaN

### Equality Operators: == vs. ===

The difference between == and === is that: **loose equality (==)** converts the variable values to the same type before performing comparison. This is called type coercion. **Strict equality (===) (recommended to use)** does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.

## JavaScript Fundamentals – Part 2

### Strict mode

Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.
-

### Arguments vs Parameters

- A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
- Function parameters are the names listed in the function's definition.
- Function arguments are the real values passed to the function.
- Parameters are initialized to the values of the arguments supplied.

### Function Declarations vs. Expressions

#### The first difference: a name

When you create a function with a name, that is a function declaration. The name may be omitted in function expressions, making that function “anonymous”.

#### Hoisting

Hoisting refers to the availability of functions and variables “at the top” of your code, as opposed to only after they are created. The objects are initialized at compile time and available anywhere in your file. <br>
**Function declarations are hoisted but function expressions are not.**

#### Summary

In short, use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.

## Developer Skills & Editor Setup

### Some extensions in VSCode

- Prettier - Code formatter
- Image preview: Shows image preview in the gutter and on hover
- Setting **Sync**
- TODO Highlight

### Learning How to Code

- Set a specific, measurale, realistic and time-based goal.
- Know exactly why you are learning to code.
- Imagine a big project.
- Research technologies you need and then learn them.
- Understand the code that you're studying and typing.
- **Always type the code, don't copy-paste!**
- Take notes.
- **Challenge yourself.**
- **Come up with your own project ideas.**
- Don’t be stuck in “tutorial hell”.
- Share your goals to make yourself accountable.
- Share your learning progress with the web dev community.

### 4 steps to solve any problem

1. Make sure you 100% understand the problem.
2. Divide and conquer: break a big problem into smaller sub-problems.
3. Don't be afraid to do as much research as you have to.
4. For bigger problems, write **pseudo-code** before writing the actual code.

## HTML & CSS

### HTML

#### Element

An HTML element is defined by a start tag, some content, and an end tag: <br>
`<tagname> Content goes here... </tagname>` <br>

<img src = "https://mason.gmu.edu/~kshiffl4/375/HTML_Tags.jpg"></img>

#### HTML tag

##### HTML Headings

HTML headings are defined with the `<h1>` to `<h6>` tags.
`<h1>` defines the most important heading. `<h6>` defines the least important heading
<br>

```
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```

##### HTML Paragraphs

HTML paragraphs are defined with the `<p>` tag:

```
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

##### HTML Links

HTML links are defined with the `<a>` tag:

```
<a href="https://www.w3schools.com">This is a link</a>
```

##### HTML Images

HTML images are defined with the <img> tag.

The source file (src), alternative text (alt), width, and height are provided as attributes:

```
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
```

#### HTML Attributes

- The **href** attribute specifies the URL of the page the link goes to.
- The **src** attribute specifies the path to the image to be displayed
- The `<img>` tag should also contain the **width and height** attributes, which specify the width and height of the image (in pixels).
- The required **alt** attribute for the `<img>` tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.
- The **style** attribute is used to add styles to an element, such as color, font, size, and more.
- You should always include the lang attribute inside the `<html>` tag, to declare the language of the Web page. This is meant to assist search engines and browsers.
- The title attribute defines some extra information about an element.

### The CSS Box Model

<img src = "https://drek4537l1klr.cloudfront.net/grant2/Figures/ifcfig01.jpg"></img>

- Content: text, images, etc;
- Padding: transparent area around the content, inside of the box;
- Border: goes around the padding and the content;
- Margin: space between boxes;
- Fill area: area that gets filled with background color or background image.

## DOM and Event Fundamentals

### The HTML DOM (Document Object Model)

The Document Object Model (DOM) is **a cross-platform and language-independent interface** that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; **with them one can change the structure, style or content of a document**. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.

When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

<image src="https://www.w3schools.com/js/pic_htmltree.gif"/>

<image src="00-Utils/images/Dom.png">

### Selecting and Manipulating Elements

- Set text content:

`document.querySelector('.className').textContent = 'text';`

- Get value of input field:

`document.querySelector('.className').value;`

### Handling Click Events

```
document.querySelector('.className').addEventListener('click', function () {
  ...
})
```

### Manipulating CSS Styles

```
document.querySelector('body').style.backgroundColor = '#hexColor';
```

### Working with Classes

#### Remove

```
document.querySelector('.className').classList.remove('hidden');
```

#### Add

```
document.querySelector('.className').classList.add('hidden');
```

#### Contains

```
document.querySelector('.className').classList.contains('hidden');
```

### Handling a keypress event

```
document.addEventListener('keydown', function(e) {
  console.log(e.key);
})
```

### Change src attribute

```
dice.src = `dice-${rollNumber}.png`;
```

### Container add html from javascript

```javascript
const data = "hello"
const nameContainer = document.querySelector('.containerClass');
const html = 
`
  <h1>${data}</h1>
`
nameContainer.insertAdjacentHTML('beforeend',html);
```

## Data Structures, Modern Operators and Strings

### Destructuring

Destructuring assignment is a syntax that allows you to assign object properties or array items as variables.

```javascript
const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/1970',
}
// Destructure properties into variables
const { id, title, date } = note
// Assign a custom name to a destructured value
const { id: noteId, title, date } = note
```
You can also destructure nested object values. For example, update the note object to have a nested author object:

```javascript
const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/1970',
  author: {
    firstName: 'Sherlock',
    lastName: 'Holmes',
  },
}
const {
  id,
  title,
  date,
  author: { firstName, lastName },
} = note
```

Array destructuring allows you to create new variables using an array item as a value. Consider this example, an array with the various parts of a date:

```javascript
const date = ['1970', '12', '01']
// Create variables from the Array items
const year = date[0]
const month = date[1]
const day = date[2]
// Destructure Array values into variables
const [year, month, day] = date
console.log(year, month, day)
// 1970 12 01
```

### Spread

Spread syntax (...) is another helpful addition to JavaScript for working with arrays, objects, and function calls. Spread allows objects and iterables (such as arrays) to be unpacked, or expanded, which can be used to make shallow copies of data structures to increase the ease of data manipulation.

```javascript
// Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']
// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools]
console.log(allTools)
// ["hammer", "screwdriver", "wrench", "saw"]
```

```javascript
// Array of users
const users = [
  { id: 1, name: 'Ben' },
  { id: 2, name: 'Leslie' },
]
// Add new user
const updatedUsers = [...users, newUser]
```

Adding or modifying properties on an existing object in an immutable fashion is simplified with spread. In this example, the isLoggedIn property is added to the user object:

```javascript
const user = {
  id: 3,
  name: 'Ron',
}
const updatedUser = { ...user, isLoggedIn: true }
console.log(updatedUser)
// {id: 3, name: "Ron", isLoggedIn: true}
```

### Rest Parameters

The last feature you will learn in this article is the rest parameter syntax. The syntax appears the same as spread `(...)` but has the opposite effect. Instead of unpacking an array or object into individual values, the rest syntax will create an array of an indefinite number of arguments.

```javascript
function restTest(one, two, ...args) {
  console.log(one, two, args)
}
restTest(1, 2, 3, 4, 5, 6)
// 1 2 [3, 4, 5, 6]
```

```javascript
const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']
console.log(firstTool, rest)
// hammer ["screwdriver", "wrench"]
```

### Conclusion

In this article, you learned about destructuring, spread syntax, and rest parameters. In summary:

- Destructuring is used to create varibles from array items or object properties.
- Spread syntax is used to unpack iterables such as arrays, objects, and function calls.
- Rest parameter syntax will create an array from an indefinite number of values.

### Reference

https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript#spread

## How Javascript Works Behind the Scenes

### The Javascript Engine and Runtime

#### Javascript Engine

A JavaScript engine is a software component that executes JavaScript code.

Some engines are used by browser:
|          Browser         | Name of Javascript Engine |
|:------------------------:|:-------------------------:|
|       Google Chrome      |             V8            |
| Edge (Internet Explorer) |           Chakra          |
|      Mozilla Firefox     |       Spider Monkey       |
|          Safari          |   Javascript Core Webkit  |

<img src="https://rgbk21.github.io/Code/JavaScript/imgs/UdemyCourse/Module8/Image2.png"/>

#### Compilation vs. Interpretation vs. Just-in-time (JIT) compilation
**Compilation**: Entire code is converted into machine code at once, and writen to a binary file that can be executed by a computer

**Interpretation**: interpreter runs through the source code and executes it line by line

<img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2020/12/31171441/Screenshot-855-1024x648.png" />

**Just-in-time (JIT) compilation**: Entire code is converted into machine code at once, then executed immediately

<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220802233813/Java-Compiler.png"/>

#### Modern Just-in-time compilation of javascript

<img src="https://www.freecodecamp.org/news/content/images/2023/05/FA4EDBD9-0348-4445-B795-8D1FEF904CBE.jpeg"/>

#### Javascript runtime

<img src="https://www.epineda.net/content/images/2022/01/CH02_F06_pineda.png"/>

### Execution Contexts and The Call Stack

#### Execution Context

An execution context is a conceptual environment in which JavaScript code is executed. It consists of three main components:

- The Variable Environment: It contains variables, function declarations, and function arguments.
- The Lexical Environment: It holds variables and function declarations, similar to the Variable Environment. However, it also maintains a reference to the outer environment, enabling access to variables from outer scopes.
- The This Value: It references the current object or context on which a function is invoked.

Every time a function is called, a new execution context is created, forming a stack of execution contexts known as the call stack.

#### Call Stack

The call stack is a data structure used by JavaScript to manage the execution of functions. It keeps track of the execution context of function calls. When a function is called, its execution context is pushed onto the call stack, and when the function completes, its execution context is popped from the stack.

The call stack follows the Last-In-First-Out (LIFO) principle, meaning the last function that gets pushed onto the stack is the first one to be executed and removed.

The call stack ensures that function calls are processed in the expected order, and it helps manage the flow of execution in JavaScript.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Li3qnzE5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ibhnjcpmp3nal6g6gsnd.png"/>

### Scope and The Scope Chain

#### Scope

In JavaScript, scope refers to the visibility and accessibility of variables, objects, and functions within a particular section of code during runtime.

1. **Global Scope:** Variables declared outside of any function have global scope. They are accessible from anywhere in the code, including other functions or blocks.
2. **Function Scope:** Variables declared within a function have function scope. They are accessible only within the function itself and not outside of it.
3. **Block Scope with let and const (ES6):** In addition to function scope, ES6 introduced block scope using the let and const keywords. Variables declared with let and const have block scope, meaning they are limited to the block in which they are defined (e.g., within curly braces {}).

<img src="https://media.licdn.com/dms/image/C5112AQEfPB6C3QpPIw/article-cover_image-shrink_600_2000/0/1580805029880?e=2147483647&v=beta&t=xf2S2sHiIOwIWN6F0cn5hTTVy1DwfzSTO7y2DxcjEnY"/>

#### Global scope

Before you write a line of JavaScript, you’re in what we call the Global Scope. If we declare a variable, it’s defined globally:

```javascript
// global scope
var name = 'Todd';
```

#### Local scope

A local scope refers to any scope defined past the global scope. There is typically one global scope, and each function defined has its own (nested) local scope.

```javascript
// Scope A: Global scope out here
var myFunction = function () {
  // Scope B: Local scope in here
};
```

#### Function Scope

All scopes in JavaScript are created with Function Scope only, they aren’t created by for or while loops or expression statements like if or switch. New functions = new scope - that’s the rule. A simple example to demonstrate this scope creation:

```javascript
// Scope A
var myFunction = function () {
  // Scope B
  var myOtherFunction = function () {
    // Scope C
  };
};
```

#### Lexical Scope

Whenever you see a function within another function, the inner function has access to the scope in the outer function, this is called Lexical Scope or Closure - also referred to as Static Scope. The easiest way to demonstrate that again:

```javascript
// Scope A
var myFunction = function () {
  // Scope B
  var name = 'Todd'; // defined in Scope B
  var myOtherFunction = function () {
    // Scope C: `name` is accessible here!
  };
};
```

#### Closures

Closures ties in very closely with Lexical Scope. A better example of how the closure side of things works, can be seen when returning a function reference - a more practical usage. Inside our scope, we can return things so that they’re available in the parent scope:

```javascript
var sayHello = function (name) {
  var text = 'Hello, ' + name;
  return function () {
    console.log(text);
  };
};
sayHello('Todd'); // nothing happens, no errors, just silence...

var helloTodd = sayHello('Todd');
helloTodd(); // will call the closure and log 'Hello, Todd'
```

**Reference:** https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope

```
### The this Keyword

#### How to create a function in object

```
const person = {
  firstName: "abc",
  lastName : "xyz",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```

#### this Keyword

The `this` keyword refers to an object. Which object depends on how `this` is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

- In an object method, `this` refers to the object
- Alone, `this` refers to the global object
- In a function, `this` refers to the global object
- In a function, in strict mode, `this` is `undefined`
- In an event, `this` refers to the element that received the event
- Methods like call(), apply(), and bind() can refer `this` to any object.

#### Arrow and Regular Functions

Arrow function
```
const increment = (num) => num + 1;
increment(41); // => 42
```
Regular Functions
```
function increment(num) {
	return num+1
}
increment(41); // => 42
```

```
const increment = function(num) {
	return num+1
}
increment(41); // => 42
```

### Primitive Types and Reference Types

#### Primitive Types
These data types are pretty simple, and are sometimes treated as the lowest level of implementation of a programming language. They are not objects, and do not have methods. Examples of such data types are **numbers, strings, booleans, null, and undefined**.

When you declare a primitive data type in JavaScript, **it is stored on a stack**.

#### Reference Types

Reference data types are dynamic in nature. They do not have a fixed size. Examples of such data types include **arrays, functions, collections, and all other types of objects**.

When you declare a reference data type in JavaScript, **it is stored on heap**.

<img src="https://rgbk21.github.io/Code/JavaScript/imgs/UdemyCourse/Module8/PrimitivesTypes_vs_ReferenceTypes.png"/>

## A closer look at functions

### How Passing Arguments Works: Value vs. Reference

The main difference between value and reference is that passing by value happens when assigning primitives while passing by reference when assigning objects.

```
const val = "default";
const arr = [1];
const obj = {objValue:1}
const change = function(paramVal, paramArr, paramObj) {
  paramVal = "changed";
  paramArr.push(2);
  paramObj.objValue = 2;
}
change(val, arr, obj)
console.log(val, arr, obj)
// default [ 1, 2 ] { objValue: 2 }
```

### Callback functions

A **callback function** is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a **higher-order function**, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.

```javascript
function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}
function logQuote(quote){
  console.log(quote);
}
createQuote("eat your vegetables!", logQuote); // 1
// Result in console: 
// Like I always say, eat your vegetables!
```

In the above example, `createQuote` is the higher-order function, which accepts two arguments, the second one being the callback. The `logQuote` function is being used to pass in as our callback function.

### The call and apply Methods

**Call method**

The call method is basically used to **invoke the function with different this object.** In JavaScript, this refers to an object. It depends on how we are calling a particular function. In the global scope, this refers to the global object window. Inside function also this refers to the global object window.

In strict mode, when we use any function then this refers to undefined. In functions like call, this could refer to a different object. With the help of the call method, we can invoke a particular function with different objects.

**Syntax:** `object.objectMethod.call( objectInstance, arguments )`

```javascript
const obj1 = { 
    firstName: "First_name", 
    lastName: "Last_name"
}; 
const obj2 = { 
    firstName: "Kane", 
    lastName: "Nguyen"
}; 
function printName(profession, country) { 
    console.log(this.firstName + " " 
        + this.lastName + " " + 
        profession + " " + country); 
} 
printName.call(obj2, "Developer", "Vietnam"); 
// Kane Nguyen Developer Vietnam
```

**Apply method**

Just like the call method we can also **bind the function to any object**. Using apply( ) method also we can invoke a given function with different objects.

**Syntax:** `object.objectMethod.apply(objectInstance, arrayOfArguments)`

```javascript
const obj1 = { 
    firstName: "First_name", 
    lastName: "Last_name"
}; 
const obj2 = { 
    firstName: "Kane", 
    lastName: "Nguyen"
}; 
function printName(profession, country) { 
    console.log(this.firstName + " "
        + this.lastName + " " + 
        profession + " " + country); 
} 
printName.apply(obj2, ["Developer", "Vietnam"]); 
// Kane Nguyen Developer Vietnam
```

**Reference:** https://www.geeksforgeeks.org/explain-call-and-apply-methods-in-javascript/

### The bind Method

In JavaScript function binding happens using Bind() method. With this method, we can **bind an object to a common function**, so that the function gives different results when needed. otherwise, it gives the same result or gives an error while the code is executing. We use the Bind() method to call a function with this value, this keyword refers to the same object which is currently selected.

For this example, we made a new variable function printFunc2 which refers to the function printFunc() of object geeks. Here the binding of this is lost, so no output is produced. To make sure that any binding of this is not to be lost, we are using Bind() method.

```javascript
let geeks = { 
    name: "ABC", 
    printFunc: function () { 
        console.log(this.name); 
    } 
}   
let printFunc2 = geeks.printFunc; 
printFunc2();
//no output is produced by this code//
```

 By using the bind() method we can set the context of this to a particular object. So we can use other variables also to call the bound function. Use the bind() method in the previous example:

```javascript
let geeks = { 
    name: "ABC", 
    printFunc: function () { 
        console.log(this.name); 
    } 
} 
let printFunc2 = geeks.printFunc.bind(geeks); 
//using bind() 
// bind() takes the object "geeks" as parameter// 
printFunc2();
/// Output: ABC
```

**Function Borrowing**

With the bind() method, an object can borrow a method from another object.
The example below creates 2 objects (person and member).

The member object borrows the fullname method from the person object:

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
// Hege Nilsen
```

**With callback**

When a function is used as a callback, this is lost.

This example will try to display the person name after 3 seconds, but it will display undefined instead:

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);
```

The bind() method solves this problem.

In the following example, the bind() method is used to bind person.display to person.

This example will display the person name after 3 seconds:

```javascript
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}
let display = person.display.bind(person);
setTimeout(display, 3000);
```

**Reference:**
- https://www.geeksforgeeks.org/javascript-function-binding/
- https://www.w3schools.com/js/js_function_bind.asp

### Immediately invoked function expression

An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined.

**Syntax**

```javascript
(function functionName(args) {
 // function logic
})(args);
```

```javascript
(function functionName(args) {
 // function logic
}(args));
```

**Example:**

```javascript
(function sum(a, b) {
  return a + b;
}(2,3))
```

## Asynchronous Javascript: Promises, Async/Await, and AJAX

### Asynchronous Javascript, AJAX and APIs

#### Synchronous code

- Synchronous code is executed line by line.
- Each one of code waits for previous line to finish.
- So, it can be the cause of 'blocking' when the code has something that makes it stop, such as a timer, input,...

#### Asynchronous code

- Asynchronous code is executed after a task that runs in the "background" finishes. (More on "background in the lecture on Event Loop")
- Asynchronous code is non-blocking.
- Execution doesn't wait for an asynchronous task to finish its work.

#### What is AJAX calls?

Asynchronous Javascript And XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.

#### API

Application Programming Interface: Piece of software that we can used by another piece of software, in order to allow appications to talk to each other.

#### XMLHttpRequest

```javascript
const request = XMLHttpRequest();
request.open('HTTP_METHOD','url');
request.send();
request.addEventListener('load', function() {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
})
```

### Promises and the Fetch API

#### Promises

An object that is used as a placeholder for the future result of an asynchronous operation.

-> Less formal: A container for an asynchronously delivered value.

-> Less formal: A container for a future value.

Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell.

#### The promises lifecycle

```
                                ┌────────┐
                         ┌─────►│Fulfille│
                         │      └────────┘
┌───────┐Async task  ┌───┴───┐
│Pending├───────────►│Settled│
└───────┘            └───┬───┘
                         │      ┌────────┐
                         └─────►│Rejected│
                                └────────┘
```

### Consuming Promises

```javascript
const getData = function() {
  fetch(`url.api.com`).then(function(response) {
    console.log(response);
    return response;
  })
}
getData();
```

Example get country data:

```javascript
const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(function(response) {
    console.log(response);
    return response.json(); // it returns a promises AGAIN!
  }).then(function(data) {
    console.log(data);
    return data;
  })
}
getCountryData('VietNam');
```

Using narrow function:

```javascript
const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then((response) => response.json())
  .then((data) => data)
}
getCountryData('VietNam');
```

#### Chaining promises

Chaining promises is a powerful way to sequence asynchronous operations in a more readable and maintainable manner. Each .then() in a promise chain returns a new promise, allowing you to chain multiple asynchronous operations together.

### Handling Rejected Promises

#### Method 1: Using callback function

```javascript
const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then((response) => response.json(), (err) => console.log(err)) // Handling Rejected Promises)
  .then((data) => data, (err) => console.log(err)) // Handling Rejected Promises);
}
getCountryData('VietNam');
```

#### Method 2: Using `.catch()` method

```javascript
const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then((response) => response.json())
  .then((data) => data)
  .catch(err => console.log(err)); // Just need one Handling Rejected Promises
  .finally(()=>{
    // Always do this function even if promises is fulfilled or rejected
  })
}
getCountryData('VietNam');
```

### Throwing Errors Manually

**Syntax:**

```javascript
throw new Error(`error message`);
                   	│
                   	▼
          	.catch((err)=>console.log(err)) // Output: error message);
```

For example:

```javascript
const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then((response) => 
  {
    if (!response.ok)
      throw new Error(`Country not found (${response.status})`)
    return response.json();
  })
  .catch(err => console.log(err)) // Country not found (404)
  }
```

### Asynchronous Behind the Scenes: The Event Loop

#### Some definitions

In JavaScript, the event loop and various asynchronous programming techniques enable non-blocking behavior and the execution of concurrent tasks. Here's a simplified explanation of how asynchronous work works behind the scenes in JavaScript:

- **Event Loop**: JavaScript utilizes an event loop to manage asynchronous tasks. The event loop continuously checks if there are any tasks to execute, such as callbacks or events, while also allowing the main thread to handle other operations.

- **Callbacks**: Callback functions are a common way to handle asynchronous operations in JavaScript. When an asynchronous task is initiated, such as making an HTTP request or reading a file, a callback function is provided. Once the task completes, the event loop places the corresponding callback function in a queue for execution.

- **Web APIs and Tasks**: JavaScript uses Web APIs (provided by the browser or runtime environment) to handle asynchronous tasks. These APIs include timers (setTimeout, setInterval), AJAX (XMLHttpRequest), and more. When an asynchronous task is started, it is offloaded to the appropriate Web API, allowing the main thread to continue executing.

- **Task Queue**: After an asynchronous task is completed, its corresponding callback function is placed in the task queue. The event loop continuously checks the task queue and moves the callbacks to the call stack for execution when the call stack is empty.

- **Microtasks**: JavaScript also has a microtask queue, which is used for **executing high-priority tasks**. Microtasks, such as promises (then and catch), mutation observers, or queueMicrotask, have a higher priority than regular tasks in the event loop and are executed before the next rendering.

- **Event-driven Architecture**: JavaScript's asynchronous behavior is primarily event-driven. Events, such as user interactions (clicks, inputs) or system events, trigger corresponding event handlers or callback functions to execute asynchronously.

#### How does asynchronous JavaScript work behind the scenes?

The event loop decides when to execute each code task present in the callback queue and the micro-tasks queue. Let us understand the execution process of all the code in an imaginary situation. Let us try to generalize the process into different steps :
All the code tasks present in the call stack are executed in an orderly fashion. It is synchronous and waits for the previous code task to be executed. In this step, all the code tasks in the call stack are executed.
Once the asynchronous task finishes getting loaded in the background, it is sent to the callback queue. The callback function attached to this asynchronous task is waiting to be executed right here. This asynchronous is then queued up to be executed in the callback queue.
Now, the part of event loops comes into play. The event loop continuously checks if the call stack is empty and once it finds it to be empty, it takes the first task in the callback queue and stacks it into the call stack which is then executed. This process continues until the event loop finds the call stack and callback queue to be empty.

<img src="https://nainacodes.com/static/images/understand-the-event-loop-in-javascript/async-2.png"/>

<img src="https://i.stack.imgur.com/Oc7O1.png"/>

### Building a simple promise

```javascript
const promiseFunction = new Promise(function (resolve, reject) {
  if (condition == true) {
    resolve(‘Fulfilled message’); // it will pass the message to .then()
  }
  else {
    reject(‘Rejected message’); // it will pass the message to .catch()
  }
})
promiseFunction
.then(res => console.log(res)) // Fulfilled message
.catch(err => console.error(err)); // Rejected message
```

Promisifying setTimeout

```javascript
const wait = function(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds*1000);
  })
}
wait(2).then(()=> {
  console.log(‘Waited for 2 seconds’);
  return wait(1);
}).then(() => console.log(‘Waited for 1 second’));
```

#### Reference

- https://nainacodes.com/blog/understand-the-event-loop-in-javascript
- https://dev.to/vinaykishore/how-does-asynchronous-javascript-work-behind-the-scenes-4bjl

### Async/Await

Async/await is a powerful feature in JavaScript that simplifies asynchronous code and makes it look more like synchronous code, improving readability and maintainability. It's built on top of promises.

1. **Async Function Declaration:**

To use async/await, you declare a function as async. An async function always returns a promise, and it allows you to use the await keyword inside it.

```javascript
async function myAsyncFunction() {
  // Code here
}
```

2. **Await Expression:**

Inside an async function, you can use the await keyword before an expression that returns a promise. The await keyword pauses the execution of the function until the promise is resolved, and then it resumes with the resolved value.

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```

In this example, fetchData is an async function that fetches data from an API using fetch. The await keyword is used to wait for the asynchronous fetch operation to complete before moving on.

3. **Async/Await with Promise:**

Async/await is often used with promises. You can use Promise.all to concurrently execute multiple asynchronous operations and Promise.race to get the result of the first completed operation.

```javascript
async function fetchDataWithPromiseAll() {
  const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
  console.log('Result 1:', result1);
  console.log('Result 2:', result2);
}
```

### Error Handling with try...catch

The **try** statement allows you to define a block of code to be tested for errors while it is being executed.

The **catch** statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements try and catch come in pairs:

```javascript
try {
  // Block of code to try
}
catch(err) {
  // Block of code to handle errors
}
```

### Returning Values from Async Function

Implementation is in `async-await.js` file

### Running Promises in Parallel

The Promise.all() static method takes an **iterable of promises as input** and **returns a single Promise**. This returned promise fulfills **when all of the input's promises fulfill** (including when an empty iterable is passed), with an array of the fulfillment values. It **rejects when any of the input's promises rejects**, with this first rejection reason.

```javascript
async  function  getABC () {
  // Promise.all() allows us to send all requests at the same time. 
  let results = await Promise.all([ getValueA(), getValueB(), getValueC() ]); 

  return results.reduce((total,value) => total * value);
}
```

### Other Promise Combinators: race, allSettled and any

#### Promise.race()

The Promise.race() static method takes an **iterable of promises as input** and **returns a single Promise**. This returned promise settles with the eventual state of **the first promise that settles**.

#### Promise.allSettled()

The Promise.allSettled() static method takes an **iterable of promises as input** and **returns a single Promise**. This **returned promise fulfills** when all of the input's promises settle (including when an empty iterable is passed), **with an array of objects that describe the outcome of each promise**.

#### Promise.any()

The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This **returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value**. It **rejects when all of the input's promises reject** (including when an empty iterable is passed), with an **AggregateError containing an array of rejection reasons.**

#### Reference

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

## Links bibliography

- [Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)
- [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_overview)
- [Parameter](https://developer.mozilla.org/en-US/docs/Glossary/Parameter#:~:text=Note%20the%20difference%20between%20parameters,values%20passed%20to%20the%20function.)
- [When to use a function declaration vs. a function expression](https://www.freecodecamp.org/news/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0/)
- [HTML Tutorial](https://www.w3schools.com/html/default.asp)
- [CSS Tutorial](https://www.w3schools.com/css/default.asp)
- [The HTML DOM (Document Object Model)](https://www.w3schools.com/js/js_htmldom.asp)
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [The JavaScript this Keyword](https://www.w3schools.com/js/js_this.asp)
- [Understanding Destructuring, Rest Parameters, and Spread Syntax in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript#destructuring)
- [What is a Callback Function in JavaScript?](https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/)
- [Explain call() and apply() methods in JavaScript](https://www.geeksforgeeks.org/explain-call-and-apply-methods-in-javascript/)
- [JavaScript Function bind()](https://www.w3schools.com/js/js_function_bind.asp)
- [JavaScript Function binding](https://www.geeksforgeeks.org/javascript-function-binding/)
- [Tìm hiểu sâu hơn về scope Javascript](https://viblo.asia/p/tim-hieu-sau-hon-ve-scope-javascript-Qbq5QrRwKD8)
- [Everything you wanted to know about JavaScript scope](https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope)
- [JavaScript Behind the Scenes: The Event Loop](https://nainacodes.com/blog/understand-the-event-loop-in-javascript)
- [How does asynchronous JavaScript work behind the scenes?](https://dev.to/vinaykishore/how-does-asynchronous-javascript-work-behind-the-scenes-4bjl)
- [JavaScript Errors](https://www.w3schools.com/js/js_errors.asp)
- [Mozilla Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
