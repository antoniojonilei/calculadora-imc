const resposta = document.querySelector('#res')

function operar() {
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value    

    const valorIMC = (peso / (altura * altura))

    if(nome !== '' && altura !== '' && peso !== '') {
        
        if(valorIMC < 16) {
            resposta.innerHTML = (`${nome}, o seu IMC é igual: ${valorIMC.toFixed(2)}.<br> Você está em Magreza grave`)
        } else if (valorIMC == 16 || valorIMC < 17) {
            resposta.innerHTML = (`${nome}, o seu IMC é igual: ${valorIMC.toFixed(2)}.<br> Você está em Magreza moderada`)
        } else if (valorIMC == 17 || valorIMC < 18.5) {
            resposta.innerHTML = (`${nome}, o seu IMC é igual: ${valorIMC.toFixed(2)}.<br> Você está em Magreza leve`)
        } else if (valorIMC == 18.5 || valorIMC < 25) {
            resposta.innerHTML = (`${nome}, o seu IMC é igual: ${valorIMC.toFixed(2)}.<br> Você está Saudável`)
        } else if (valorIMC == 30 || valorIMC < 30) {
            resposta.innerHTML = (`${nome}, o seu IMC é igual: ${valorIMC.toFixed(2)}.<br> Você está em Sobrepeso`)
        } else if (valorIMC == 30 || valorIMC < 35) {
            resposta.innerHTML = (`${nome}, o seu IMC é igual: ${valorIMC.toFixed(2)}.<br> Você está em Obesidade Grau 1`)
        } else if (valorIMC == 35 || valorIMC < 40) {
            resposta.innerHTML = (`${nome}, o seu IMC é igual: ${valorIMC.toFixed(2)}.<br> Você está em Obesidade Grau 2 <br>(severa)`)
        } else if (valorIMC => 40) {
            resposta.innerHTML = (`${nome}, o seu IMC é igual: ${valorIMC.toFixed(2)}.<br> Você está em Obesidade Grau 3 <br>(mórbida)`)
        }        

    } else {
        window.alert(`Preencha todos os dados`)
    } 
   
}




