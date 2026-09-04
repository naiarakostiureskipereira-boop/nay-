const avanca = document.querSelectorAll('.btn-proximo');

avanca.forEach(button => [ 
    button.addEventListener('click', function(){
        const atual = document.querSelectorAll('.ativo');
        const proximoPasso = 'passo-' +this.getAttribute('data-proximo')

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
])