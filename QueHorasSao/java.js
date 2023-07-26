function carregar () {
var time = new Date ()
var hora = time.getHours()
var minuto = time.getMinutes()
var text = document.getElementById('msg')
var img = document.getElementById('imagem')
var tit = document.getElementById('tit')
text.innerText = `Agora são: ${hora} horas e ${minuto} minutos`
if (hora > 0 && hora < 12) {
    img.src = 'manhã.png'
    tit.innerText = 'Bom dia'
    document.body.style.background = '#e5837e'
}
else if (hora >= 12 && hora < 18){
    img.src = 'tarde.png'
    tit.innerText = 'Boa tarde'
    document.body.style.background = '#00647f'
}
else {
    img.src = 'noite.png'
    tit.innerText = 'Boa noite'
    document.body.style.background = '#001436'
}
}