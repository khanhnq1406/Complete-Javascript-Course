const objMark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcbmi : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const objJohn = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcbmi : function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

if (objJohn.calcbmi() > objMark.calcbmi()) {
    console.log(`${objJohn.fullname} (${objJohn.bmi}) is higher than ${objMark.fullname} (${objMark.bmi})!`);
}
else {
    console.log(`${objMark.fullname} (${objMark.bmi}) is higher than ${objJohn.fullname} (${objJohn.bmi})!`);
}