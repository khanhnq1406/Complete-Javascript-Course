const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue*0.15;
    }
    else {
        return billValue*0.2;
    }
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(totals);
function calcAverage (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage(totals));