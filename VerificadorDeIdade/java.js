function clicar () {
    var agora = new Date()
    var ano = agora.getFullYear()
    var anonasc = window.document.getElementById('buttonAno')
    var res = window.document.getElementById('div02')

    if (anonasc.value.length == 0 || anonasc.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }
    else {
        var imagem = window.document.createElement('img')
        imagem.setAttribute('id', 'foto')
        var sex = window.document.getElementsByName('sex')
        var idade = ano - Number(anonasc.value)
        var genero = ''

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 & idade <= 5) {
                imagem.setAttribute('src','imagens/bebe.jpg')
            } else {
                if(idade <=12) {
                    imagem.setAttribute('src','imagens/crianca.jpg')
                } else {
                    if (idade <=18) {
                        imagem.setAttribute('src','imagens/adolescente.jpg')
                    } else {
                        if (idade > 18 && idade < 60) {
                            imagem.setAttribute('src','imagens/adulto.jpg')
                        } else {
                            imagem.setAttribute('src','imagens/idoso.jpg')
                        }
                    }
                }
            } 
        }
        else {
            genero = 'Mulher'
        }
        res.innerHTML=`Detectamos que você é <strong>${genero}</strong> com<strong> ${idade} anos</strong> <br>` 
        res.appendChild(imagem)
    }

}