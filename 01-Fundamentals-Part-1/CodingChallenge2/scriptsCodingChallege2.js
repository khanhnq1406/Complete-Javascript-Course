let markMass, markHeight, markBMI;
let johnMass, johnHeight, johnBMI;
let markHigherBMI;

console.log("---Test data 1---");
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
if (markBMI > johnBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
}
else
{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
console.log("---Test data 2---");
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
if (markBMI > johnBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
}
else
{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

