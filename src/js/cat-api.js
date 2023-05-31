
const API_KEY = 'live_80ex4wf8IS4bu0YKx7Js7p6YcQ1sFTSyysCT1nxiV8Wz2kpRphEWdFc3CgyQaagq';
const BASE_URL = 'https://api.thecatapi.com/v1/';
const BREEDS = 'breeds';
const IMG_SEARCH = 'images/search';


function fetchBreeds(breedId = '') {
  let url;
  if (breedId) {
    url = `${BASE_URL}${IMG_SEARCH}?limit=1&breed_ids=${breedId}&api_key=${API_KEY}`;
  } else {
    url = `${BASE_URL}${BREEDS}`;
  }

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
}

export { fetchBreeds };