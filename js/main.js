const instagram = {
    section: document.getElementById('instagram'),
    enlace: document.getElementById('link-instagram')
}

const pinterest = {
    section: document.getElementById('pinterest'),
    enlace: document.getElementById('link-pinterest')
}

const platzi = {
    section: document.getElementById('platzi'),
    enlace: document.getElementById('link-platzi')
}

let pagina_actual = instagram;
instagram.enlace.classList.add('link-active');
pinterest.section.style.display = 'none';
platzi.section.style.display = 'none';

instagram.enlace.addEventListener('click', ()=> show(instagram))
pinterest.enlace.addEventListener('click', ()=> show(pinterest))
platzi.enlace.addEventListener('click', ()=> show(platzi))

function show(pagina_nueva){
    pagina_actual.section.style.display = 'none';
    pagina_nueva.section.style.display = 'block';

    pagina_actual.enlace.classList.remove('link-active');
    pagina_nueva.enlace.classList.add('link-active');

    pagina_actual = pagina_nueva;
}