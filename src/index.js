import { fetchBreeds, fetchCatByBreed } from './js/cat-api';


    const select = document.querySelector('.breed-select')
    const catInfo = document.querySelector('.cat-info')
    const loader = document.querySelector('.loader')
    const error = document.querySelector('.error')


error.setAttribute('hidden', '');

    function generateOptionsMarkup(data) {
        const markup = data
          .map(cat => `<option value="${cat.id}">${cat.name}</option>`)
          .join('');
        return markup; 
      }
      
      fetchBreeds()
        .then(data => {
          const markup = generateOptionsMarkup(data);
          select.innerHTML = markup;
        })
        .catch(error => {
          error.removeAttribute('hidden', '');
          console.log(error);
        });

    
        
select.addEventListener('change', (elem) => {
   loader.classList.add('hidden');
        fetchBreeds(elem.target.value)
            .then(data => {             
                catInfo.innerHTML = createMurkup(data);
            })
            .catch(error => {
                error.classList.remove('hidden');
                console.log(error)
            });
});

function createMurkup(cat) { 
    const murkup = cat
    .map(cat =>
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
