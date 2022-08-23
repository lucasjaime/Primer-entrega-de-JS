let condition = true
let i = 0
do{
    let adivinanza = prompt('¿Cuál es el animal que camina con las patas en la cabeza? (CUIDADO!! Tienes solo 3 intentos)')
    if(adivinanza.toLowerCase() == 'el piojo' || adivinanza.toLowerCase() == 'piojo'){
        alert('Su respuesta es correcta')
        condition = false
    }else{
        alert('Su respuesta es incorrecta, vuelve a intentarlo')
        i=i + 1
    }
}while(condition && i < 3)
let respuestaC = true
let contador = 1
do{
    let respuestaI = prompt('Supo responder correctamente? Responder con "si" o "no"')
    if(respuestaI.toLowerCase() == 'no'){
        let verRespuesta = true
        do{
            let respuesta = prompt('Desea ver la respuesta correcta? Responder con "si" o con "no"')
            if(respuesta.toLowerCase() == 'si'){
                alert('¿Cuál es el animal que camina con las patas en la cabeza?... EL PIOJO!');
                verRespuesta = false
            }else if(respuesta.toLowerCase() == 'no'){
                alert('Adoro tu enstusiasmo!!');
                verRespuesta = false
            }else{
                alert('Por favor introduce una respuesta válida')
            }
        }while(verRespuesta)
        respuestaC = false
    }else if(respuestaI.toLowerCase() == 'si'){
        alert('Felicidades, sos brillante!!')
        respuestaC = false
    }else{
        alert('Por favor, responder con si o no')
    }
}while(respuestaC && contador <= 1)