var texto = window.document.getElementById('text')
var numeros = []

function adicionar () {
    texto.innerHTML = ''
    var number = window.document.getElementById('txtnum')
    var valor = Number(number.value)
    if (number.value.length == 0 || valor < 1 || valor > 100 ) {
        alert('Digite um número entre 1 e 100')
    } else if (pesquisarValor(valor)){
        numeros.push(valor)
        var resposta = window.document.getElementById('numbers')
        for (var c = 0; c < numeros.length; c++) {
            var item = window.document.createElement('option')
            item.innerText = `Valor ${numeros[c]} adicionado.`
        }
        resposta.appendChild(item)
    } else {
        alert('Número já adicionado')
    }
    number.value = ''
    number.focus()
}

function finalizar() {
    texto.innerHTML= ''
    if (numeros.length == 0) {
        alert('Nenhum número adicionado')
    } else {
        var maior = numeros[0]
        var menor = numeros[0]
        var somatorio = 0
        var media = 0
        for (let pos in numeros) {
            somatorio += numeros[pos]
            if (numeros[pos] > maior) {
                maior = numeros[pos]
            } else if (numeros[pos] < menor) {
                menor = numeros[pos]
            }
        }
        media = somatorio / numeros.length
        texto.innerHTML += ` Ao todo temos ${numeros.length} numeros cadastrados <br>O maior valor informado foi ${maior} <br>
        O menor valor informado foi ${menor} <br>
        Somando todos os valores temos ${somatorio} <br>
        A média dos valores digitados foi de ${media}`
    }
}

function pesquisarValor(valor) {
    for (var c = 0; c < numeros.length; c++) {
        if (numeros[c] == valor) {
            return false
        }
    }
    return true
}