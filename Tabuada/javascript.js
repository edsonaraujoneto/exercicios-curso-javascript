function gerar () {
    var pegar = window.document.getElementById('txtnumber')
    var numero = Number(pegar.value)
    var tab = window.document.getElementById('seltab')

    tab.innerHTML = ''
    if (pegar.value.length == 0) {
        var item = window.document.createElement('option')
        item.text = 'ERRO! Digite um número'
        tab.appendChild(item)
    }
    else {
        for (var c = 0; c <= 10; c++ ) {
            var item = window.document.createElement('option')
            item.text = `${numero} x ${c} = ` + numero * c 
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}