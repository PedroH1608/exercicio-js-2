const PerguntasERespostas = document.querySelectorAll('.info');

PerguntasERespostas.forEach(abrirSeta => {
    abrirSeta.addEventListener('click', () => {
        const setaAberta = document.querySelector('.mostrar');

        if(setaAberta){
            setaAberta.classList.remove('mostrar');
        }

        abrirSeta.classList.add('mostrar');
    })
})