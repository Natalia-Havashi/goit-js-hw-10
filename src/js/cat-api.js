// export function fetchBreeds(name){
//     return fetch('${BASE_URL}${BREEDS_ENDP}')
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.statusText);
//         }
//         return response.json()
//     })
// };




// export function fetchCatByBreed(breedId){
//     return fetch('')
//     .then(resp =>{
//         if(!resp.ok){
//             throw new Error(resp.statusText);
//         }
//         return resp.json()
//     })
// }


// export function fetchCountries(name) {
//     const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
  
//     return fetch(url).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
  
//       return response.json();
//     });
//   }