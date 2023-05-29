import { fetchBreeds, fetchCatByBreed } from './js/cat-api';


    const select = document.querySelector('.breed-select')
    const catInfo = document.querySelector('.cat-info')
    const loader = document.querySelector('.loader')
    const error = document.querySelector('.error')

    
    new SlimSelect({
        select: '.breed-select'
      })


error.setAttribute('hidden', '');

fetchBreeds()
    .then(data => {
        const murkup = data.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('');     
        select.innerHTML = murkup;      
    })
    .catch(error => {
        error.removeAttribute('hidden', '');
        console.log(error)
    });;

    
        
select.addEventListener('change', (elem) => {
   loader.classList.add('hidden');
        fetchCatByBreed(elem.target.value)
            .then(data => {             
                catInfo.innerHTML = createMurkup(data);
            })
            .catch(error => {
                error.classList.remove('hidden');
                console.log(error)
            });
});

function createMurkup(cat) { 
    const murkup = cat.map(cat =>
        `   <img class="cat-img" src="${cat.url}" width="350"/>
                <div class="cat-description">
                <h2 class="name-cat">${cat.breeds[0].name}</h2>
                <p class="description">${cat.breeds[0].description}</p>
                <p>
                <h3 class="name-cat">Temperament:</h3> 
                ${cat.breeds[0].temperament}</p>
            </div>                        
        `).join(''); 
    return murkup;
}    
