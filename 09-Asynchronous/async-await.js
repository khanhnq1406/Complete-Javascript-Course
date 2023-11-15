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

const whereAmI = async function() {
    try {
      // Get lat, lng
      const positionRes = await getPosition();
      const {latitude: lat, longitude: lng} = positionRes.coords;

      // Convert to real position
      const addressRes = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`);
      if (!addressRes.ok) throw new Error('Problem getting location data');
      const data = await addressRes.json();

      // Get country information
      const countryRes = await fetch(`https://restcountries.com/v3.1/name/${data.address.country}`);
      if (!countryRes.ok) throw new Error('Problem getting country');
      const countryData = await countryRes.json();

      renderCountry(countryData[0]);

      return `You are in ${data.address.city}, ${data.address.country}`;
    }
    catch(err) {
      console.log(err);
      // Reject promise returned from async function
      throw err;
    }
}

console.log('1: Will get location');

// ### Returning Values from Async Function

// === Solution 1 to get data from async function ===
// whereAmI()
// .then(city => console.log(`2: ${city}`))
// .catch(err => console.error(`2: ${err.message}`))
// .finally(() => console.log('3: Finished getting location'));

// === Solution 2 to get data from async function ===
(async function (){
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  }
  catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();