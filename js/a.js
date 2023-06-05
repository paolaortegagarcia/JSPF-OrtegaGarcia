function jugarA(nombreJugador) {
    let palabras = ["javascript", "codigo", "desarrolloweb", "programacion", "computadora"];

    let ronda = {
        palabra: "",
        ocultarPalabra: "",
        intentos: 10,
        letrasJugadas: [],
        estado: "jugando"
    }
    
    let adivinarPalabra = () => {
        let posicion = Math.floor(Math.random() * palabras.length);
        ronda.palabra = palabras[posicion];
        ronda.ocultarPalabra = "_ ".repeat(ronda.palabra.length).trim();
    }
    
    let actualizarPalabra = (letra) => {
        let nuevaPalabra = "";
        for (let i = 0; i < ronda.palabra.length; i++) {
            if (ronda.palabra[i] === letra) {
                nuevaPalabra += letra;
            } else {
                nuevaPalabra += ronda.ocultarPalabra[i];
            }
        }
        ronda.ocultarPalabra = nuevaPalabra;
    }
    
    let iniciar = () => {

        adivinarPalabra();
            
        while (ronda.intentos > 0 && ronda.ocultarPalabra.includes("_")) {
            alert(`Palabra: ${ronda.ocultarPalabra}\nIntentos restantes: ${ronda.intentos}`);
    
            let letra = prompt("Ingresa una letra:").toLowerCase();
    
            while (!letra.match(/^[a-z]$/) || ronda.letrasJugadas.includes(letra)) {
                letra = prompt("Ingresa una letra válida sin repetirla").toLowerCase();
            }
    
            ronda.letrasJugadas.push(letra);
    
            if (ronda.palabra.includes(letra)) {
            actualizarPalabra(letra);
            } else {
            ronda.intentos--;
            }
        }
    
        if (ronda.intentos > 0) {
            ronda.estado = "ganado";
            alert(`¡Ganaste ${nombreJugador}! Has adivinado la palabra "${ronda.palabra}"`);
        } else {
            ronda.estado = "perdido";
            alert(`¡Perdiste ${nombreJugador}! La palabra correcta era "${ronda.palabra}"`);
        }
    }

    iniciar();
}

export { jugarA };
