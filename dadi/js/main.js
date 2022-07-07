const tiraDado = document.getElementById('button');
tiraDado.addEventListener('click',
    function () {
        let mioDado = Math.floor(Math.random() * 6) + 1;
        let computerDado = Math.floor(Math.random() * 6) + 1;
        if (mioDado < computerDado) {
            alert( + computerDado + 'vs' + mioDado + ': vince il computer')
        } else if (mioDado == computerDado) {
            alert( + computerDado + '=' + mioDado + ': pareggio')
        } else if (mioDado > computerDado) {
            alert( + computerDado + 'vs' + mioDado + ': hai vinto tu!')
        }    
    }
) 