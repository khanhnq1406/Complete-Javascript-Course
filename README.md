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

# Links bibliography

- [Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)
- [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_overview)
- [Parameter](https://developer.mozilla.org/en-US/docs/Glossary/Parameter#:~:text=Note%20the%20difference%20between%20parameters,values%20passed%20to%20the%20function.)
- [When to use a function declaration vs. a function expression](https://www.freecodecamp.org/news/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0/)
- [HTML Tutorial](https://www.w3schools.com/html/default.asp)
- [CSS Tutorial](https://www.w3schools.com/css/default.asp)
- [The HTML DOM (Document Object Model)](https://www.w3schools.com/js/js_htmldom.asp)
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
