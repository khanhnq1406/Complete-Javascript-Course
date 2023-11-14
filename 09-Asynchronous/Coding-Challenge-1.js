const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    console.log();
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

function getCountryData (country) {
    return fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json(), (err) => console.log(err)) // Handling Rejected Promises)
    .then((data) => data, (err) => console.log(err)) // Handling Rejected Promises);
}

const whereAmI = function(lat, lng) {
    const country = fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
    // fetch(`https://geocode.xyz/api/${lat},${lng}?geoit=json`)
    .then(res => {
        console.log(res.json);
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.address.city}, ${data.address.country}`);
        return data.address.country;
    })
    .catch(err => console.error(err))
    country.then(countryName => {
        const countryData = getCountryData(countryName);
        countryData.then(res => renderCountry(res[0]))
    })
}
whereAmI(52.508,13.381)

whereAmI(19.037, 72.873)

whereAmI(-33.933, 18.474)
