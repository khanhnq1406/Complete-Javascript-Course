function getCountryData (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json(), (err) => console.log(err)) // Handling Rejected Promises)
    .then((data) => data, (err) => console.log(err)) // Handling Rejected Promises);
}