let carregamento = document.getElementById('carregamento')
let carregar = document.getElementById('carregar')
let interval
let porcentagem = document.getElementById('porcentagem')
let BDP = document.getElementById('BDP')
let audio = document.getElementById('audio')
let tocar = false


carregar.addEventListener('click', function(){
    interval = setInterval(function(){
        let altura = parseInt(carregamento.style.height) || 0
        PN = Math.round((altura / 200) * 100)
        porcentagem.textContent = PN + '%'

        if (altura < 200) {
            carregamento.style.height = (altura + 1) + 'px'

            if (altura <= 66) {
                carregamento.style.backgroundColor = 'red'
            }

            else if (altura <= 132 ) {
                carregamento.style.backgroundColor = 'yellow'
            }

            else {
                carregamento.style.backgroundColor = 'green'
            }
        }

        else {
            clearInterval(interval)                
            porcentagem.textContent = 'chegou a 100%'
            BDP.style.display = "block"
        }


    }, 100)
})     


BDP.addEventListener('click', function(){
    if (tocar) {
        audio.pause()
        audio.currentTime = 0
        carregamento.classList.remove('mudarcor')
        porcentagem.textContent = 'chegou a 100%'
    }

    else {
        audio.play()
        carregamento.classList.add('mudarcor')
        porcentagem.textContent = 'Quem me Dera'
    }

    tocar = !tocar
})
