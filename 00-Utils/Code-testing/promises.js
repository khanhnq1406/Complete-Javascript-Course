let data;
const getCountryData = function(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

getCountryData('VietNam');