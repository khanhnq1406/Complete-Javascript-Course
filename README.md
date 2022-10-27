# [![My Skills](https://skills.thijs.gg/icons?i=js)](https://skills.thijs.gg) The Complete JavaScript Course 2022: From Zero to Expert!
This is my learning process with course "The Complete JavaScript Course 2022: From Zero to Expert!" by Jonas Schmedtmann which I will take notes here &#128221;
<br />Go to my handwritten notes , [click here!!!&#9997;](https://drive.google.com/file/d/1oQ2O_sz3jeOzOfINAHvix_wLeuYHvBYs/view?usp=sharing)

## Table of contents
- [JavaScript Fundamentals – Part 1](#javascript-fundamentals-–-part-1)

## JavaScript Fundamentals – Part 1
### Var, Let, and Const
#### **Var**
- Scope essentially means where these variables are available for use. Var declarations are globally scoped or function/locally scoped.
- **Var variables can be re-declared and updated**.
#### **Let**
- A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. So a variable declared in a block with let  is only available for use within that block. 
- **Let can be updated but not re-declared.**
#### **Const**
- Variables declared with the const maintain constant values.
- Like let declarations, const declarations can only be accessed within the block they were declared.
- **Const cannot be updated or re-declared**

### Basic operators
#### **Arithmetic Operators**
| Operator | Description                  |
|----------|------------------------------|
| +        | Addition                     |
| -        | Subtraction                  |
| *        | Multiplication               |
| **       | Exponentiation (ES2016)      |
| /        | Division                     |
| %        | Modulus (Division Remainder) |
| ++       | Increment                    |
| --       | Decrement                    |

#### **Assignment Operators**
| Operator | Example | Same As    |
|----------|---------|------------|
| =        | x = y   | x = y      |
| +=       | x += y  | x = x + y  |
| -=       | x -= y  | x = x - y  |
| *=       | x *= y  | x = x * y  |
| /=       | x /= y  | x = x / y  |
| %=       | x %= y  | x = x % y  |
| **=      | x **= y | x = x ** y |

## **Comparison Operators**
| Operator | Description                       |
|----------|-----------------------------------|
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
|----------|-------------|
| &&       | logical and |
| \|\|     | logical or  |
| !        | logical not |

#### **Type Operators**
| Operator   | Description                                                |
|------------|------------------------------------------------------------|
| typeof     | Returns the type of a variable                             |
| instanceof | Returns true if an object is an instance of an object type |

#### **Bitwise Operators**
| Operator | Description          | Example | Same as      | Result | Decimal |
|----------|----------------------|---------|--------------|--------|---------|
| &        | AND                  | 5 & 1   | 0101 & 0001  | 0001   |  1      |
| \|       | OR                   | 5 \| 1  | 0101 \| 0001 | 0101   |  5      |
| ~        | NOT                  | ~ 5     |  ~0101       | 1010   |  10     |
| ^        | XOR                  | 5 ^ 1   | 0101 ^ 0001  | 0100   |  4      |
| <<       | left shift           | 5 << 1  | 0101 << 1    | 1010   |  10     |
| >>       | right shift          | 5 >> 1  | 0101 >> 1    | 0010   |   2     |
| >>>      | unsigned right shift | 5 >>> 1 | 0101 >>> 1   | 0010   |   2     |

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
# Links bibliography
- [Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)
- [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_overview)
- [Parameter](https://developer.mozilla.org/en-US/docs/Glossary/Parameter#:~:text=Note%20the%20difference%20between%20parameters,values%20passed%20to%20the%20function.)
- [When to use a function declaration vs. a function expression](https://www.freecodecamp.org/news/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0/)
- 