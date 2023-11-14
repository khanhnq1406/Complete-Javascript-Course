const getPosition = function() {
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

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

const whereAmI = async function(country) {
    // Get lat, lng
    const positionRes = await getPosition();
    const {latitude: lat, longitude: lng} = positionRes.coords;

    // Convert to real position
    const addressRes = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`);
    const data = await addressRes.json();

    // Get country information
    const countryRes = await fetch(`https://restcountries.com/v3.1/name/${data.address.country}`);
    const countryData = await countryRes.json();

    renderCountry(countryData[0]);
}

whereAmI();