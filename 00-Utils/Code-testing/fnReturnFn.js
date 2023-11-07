const welcome = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const welcomeMsg = welcome("Hello");
welcomeMsg("Kane")

const greet = (greeting) => (name) => {console.log(`${greeting} ${name}`);}

greet("Hey")("Kane")
