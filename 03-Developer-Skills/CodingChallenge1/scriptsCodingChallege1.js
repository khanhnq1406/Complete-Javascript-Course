// 1) Understanding the problem
// - Array transformed to string. separated by ...
// - What is the X day? Answer: index + 1

// 2) Breaking up into sub-problem
// - Transform array to string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

function printForecase(arr) {
  let string = '... ';
  for (const key in arr) {
    string += `${arr[key]}ºC in ${Number(key) + 1} day ... `;
  }
  console.log(string);
}

let arrData1 = [17, 21, 23];
printForecase(arrData1);
let arrData2 = [12, 5, -5, 0, 4];
printForecase(arrData2);

//
