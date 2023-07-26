function clicar() {
    var inicio = window.document.getElementById('in')
    var fim = window.document.getElementById('end')
    var passo = window.document.getElementById('next')
    var saida = window.document.getElementById('ans')

    if (inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.length == 0) {
        saida.innerHTML = 'Impossível contar!'
    }
    else {
        var start = Number(inicio.value)
        var next = Number(passo.value)
        var end = Number(fim.value)
        saida.innerHTML = `Contando... <br>`
        if (next == 0) {
            saida.innerHTML += '<strong> Você digitou passo 0, vamos considerar passo 1 </strong> <br>'
            next = 1;
        }

        if (start < end) {
            while (start <= end) {
                saida.innerHTML += start + "&#x1F449";
                start += next
            }
        } else if (start > end) {
            while (start >=end) {
                saida.innerHTML += start + "&#x1F449";
                start -= next
            }
        } else {
            saida.innerHTML += "Inicio é o mesmo do fim."
        }
        saida.innerHTML += "\u{1F3C1}";
    }
        
}





