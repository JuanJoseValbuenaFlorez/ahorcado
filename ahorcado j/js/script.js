const botonempezar = document.getElementById("botoniniciar")
const contenedorletra = document.getElementById("contenedorletra")
const letraingresada = document.getElementById("inputletra")
const imgahorcado = document.getElementById("imgahorcado")

const inicializarjuego = () =>{
    const palabrasadivinar = ["numerar", "contar", "restar", "multiplicar"]
    const palabraA = palabrasadivinar[Math.floor(Math.random *palabrasadivinar)]


    let palabraOculta = palabraA.split('')
    let letrasAdivinadas = palabraOculta.map(()=>"_")
    let intentosRestantes = 6
    let letrasIncorrectas = []
    
    const objetodeljuego = {
        palabraOculta: palabraOculta,
        letrasAdivinadas: letrasAdivinadas,
        intentosRestantes: intentosRestantes,
        letrasIncorrectas: letrasIncorrectas,
    }

    return objetodeljuego

}


const imgahorcados = (errores) =>{
    const rutaImagenes ={
        5: '02.jpeg',
        4: '03.jpeg',
        3: '04.jpeg',
        2: '05.jpeg',
        1: '06.jpeg',
        0: '07.jpeg'
    }

    if (rutaImagenes.hasOwnProperty(errores)) {
        imgahorcado.src = `./img-ahorcado-main(1)/img-ahorcado-main/${rutaImagenes[errores]}`

    } else {
        console.error("numero de errores no valido:", errores)
    }

}

const actualizarjuego = (juego) => {
    document.getElementById('pAdivinar').innerHTML = `palabra : ${juego.letrasAdivinadas.join('')}`
    document.getElementById('nIntentos').innerHTML = `intentos restantes:${juego.intentosRestantes}`
    document.getElementById('errores').innerHTML = `letrasIncorrectas: ${juego.letrasIncorrectas.join(',')}`

}


const adivinarLetra = (juego, letra) =>{
    letra = letra.tolowerCase()

    if(juego.palabraOculta.includes(letra)){ç
        for(let i=0; i<palabraOculta.length; i++){
            if(juego.palabraOculta[i]===letra){
                juego.letrasAdivinadas[i]= letra
                document.getElementById("inputLetra").value = ""
            }
        }
    }else{
        juego.intentosRestantes--;
        juego.letrasIncorrectas.push(letras);
        inmgahorcado(juego.intentosRestantes);
        document.getElementById("inputLetra").value="";

    }

    if(juego.intentosRestantes==0){
        alert("perdiste el personaje esta completamente ahorcado");
        alert(`la palabra correcta era; ${juego.palabraOculta.join('')}`)
    }else if (!juego.letrasAdivinadas.includes("-")){
        alert("Ganaste!Has adivinado la palabra correctamente")

    }
}
