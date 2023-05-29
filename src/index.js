import { fetchBreeds, fetchCatByBreed } from './js/cat-api';


    select = document.querySelector('.breed-select')
    catInfo = document.querySelector('.cat-info')
    loader = document.querySelector('.loader')
    error = document.querySelector('.error')


error.setAttribute('hidden', '');

fetchBreeds()
    .then(data => {
        const murkup = data.map(c => `<option value="${c.id}">${c.name}</option>`).join('');     
        select.innerHTML = murkup;      
    })
    .catch(error => {
        error.removeAttribute('hidden', '');
        console.log(error)
    });;
        
select.addEventListener('change', (elem) => {
   loader.removeAttribute('hidden', '');
        fetchCatByBreed(elem.target.value)
            .then(data => {             
                catInfo.innerHTML = createMurkup(data);
                loader.setAttribute('hidden', '');
            })
            .catch(error => {
                error.removeAttribute('hidden', '');
                console.log(error)
            });
});

function createMurkup(cat) { 
    const murkup = cat.map(cat =>
        `   <img class="cat-img" src="${cat.url}" width="350"/>
                <div class="cat-description">
                <h2 class="name-cat">${cat.breeds[0].name}</h2>
                <p class="description">${cat.breeds[0].description}</p>
                <p><h3 class="name-cat">Temperament:</h3> ${cat.breeds[0].temperament}</p>
            </div>                        
        `).join(''); 
    return murkup;
}    
