const poll = {
    answers:[0,0,0,0],
    registerNewAnswer: function() {
        let input;
        input = Number(prompt(" What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)"));
        if (typeof input === 'number' && input >= 0 && input <= 3)
            this.answers[Number(input)]++;
        this.displayResult()
        this.displayResult('string')
    },
    displayResult: function(type='array') {
        if (type === 'array') {
            console.log(this.answers)
        }
        else if(type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

poll.displayResult.call({answers: [5, 2, 3]},'string')
poll.displayResult.call({answers: [1, 5, 3, 9, 6, 1]})

/////////////////////




