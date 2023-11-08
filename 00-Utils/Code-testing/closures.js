function outsideFunction() {
    let variable = 0;
    return function insideFunction() {
        console.log(variable++);
    }
}

const globalFunction = outsideFunction();
globalFunction();
globalFunction();
globalFunction();

// Example 2
let globalVar = 0;

function increase() {
    globalVar++;
    console.log(globalVar)
}

increase();
increase();
increase();
