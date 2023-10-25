window.addEventListener("DOMContentLoaded", () => {
    const $searchButton = document.getElementById("search-button");
    const $loader = document.getElementById('loader');
    const $main = document.getElementById('tvshow-container')
    $loader.classList.add("visually-hidden");

    $searchButton.addEventListener('click', () => {
        const $inputField = document.getElementById('search-input');
        const query = $inputField.value || '';
        
        if(query != '') {
            (async () => {
                try {
                    $loader.classList.remove("visually-hidden");
                    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
                    const data = await res.json();
                    console.log(data);
                    data.forEach(el => {
                        const { image, name, type, language, genres, status, rating, summary } = el.show;
                        const template = `
                            <div class="card m-2" style="width: 18rem;">
                                <img src="${image.medium}" class="card-img-top" alt="image">
                                <div class="card-body flex">
                                    <h5 class="card-title">${name}</h5>
                                    <p class="m-0"><b>Tipo:</b> ${type}</p>
                                    <p class="m-0"><b>Idioma:</b> ${language}</p>
                                    <p class="m-0"><b>Generos:</b> ${genres.join(', ')}</p>
                                    <p class="m-0"><b>Estado:</b> ${status}</p>
                                    <p class="m-0"><i class="fa-solid fa-star" style="color: #ffdd00;"></i>${rating.average || "-"}/10</p>
                                    <p class="card-text">${summary || "<p>Sin descripción</p>"}</p>
                                    <a href="" class="btn btn-primary">Ver mas</a>
                                </div>
                            </div>
                        `;
                        $main.innerHTML += template;    
                    });
                }catch(err){
                    console.log(err);
                }finally{
                    $loader.classList.add("visually-hidden");
                }
            })()
        }else{
            console.error('Please, provide a search string.');
        }
    })
})



