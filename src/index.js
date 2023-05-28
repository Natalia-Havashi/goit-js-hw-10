// import './css/style.css';
// import { fetchBreeds } from './js/cat-api';
// import { fetchCatByBreed } from './js/cat-api';

const BASE_URL = 'https://api.thecatapi.com/v1';
const BREEDS_ENDP = '/breeds';
const ENDPOINT = '/images/search';
const API_KEY = 'live_80ex4wf8IS4bu0YKx7Js7p6YcQ1sFTSyysCT1nxiV8Wz2kpRphEWdFc3CgyQaagq';


const input = document.getElementById('search-box');
const listCat = document.querySelector('.cat-list');
const catInfo = document.querySelector('.cat-info');

const catSearch = document.createElement('select');

function fetchBreeds(){
    return fetch(`${BASE_URL}${BREEDS_ENDP}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json()
    })
}

fetchBreeds()
.then(data => {
    console.log(data)
    catSearch.insertAdjacentHTML('beforeend', createOption(data))
})


function createOption(arr) {
    return arr.map(({ id, name }) => `<option class="js-cat-breeds" value="${id}" name="${name}"></option>`
    ).join('');
}


// function createMarkup(arr) {
//     return arr.map(({ original_title, poster_path, vote_average }) => `<li>
//     <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
//     <h2>${original_title}</h2>
//     <p>${vote_average}</p>
// </li>`).join('')
// }













function fetchCatByBreed(breedId){
    return fetch(`${BASE_URL}${ENDPOINT}`)
    .then(resp =>{
        if(!resp.ok){
            throw new Error(resp.statusText);
        }
        return resp.json()
    })
}


