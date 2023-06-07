function jugarPPT(nombreJugador){

    let partidasGanadasJugador = 0;
    let partidasGanadasComputadora = 0;
    const nombreComputadora = "Computadora";
    debugger
    const opcionesJugador = ['Piedra', 'Papel', 'Tijera'];
    const eleccionComputadora = opcionesJugador[Math.floor(Math.random() * opcionesJugador.length)];
    console.log(eleccionComputadora);

    const espacioJuego = document.getElementById("juegoElegido");
    const divJuego = document.createElement("div");
    divJuego.classList.add("containerPPT");

    espacioJuego.appendChild(divJuego);

    const botones = document.createElement("div");
    botones.classList.add("opciones");

    opcionesJugador.forEach((opcion) => {
        const boton = document.createElement("button");
        boton.classList.add(`${opcion.toLowerCase()}`);
        boton.textContent = opcion;

        botones.appendChild(boton);
    })
    divJuego.appendChild(botones);


    








}

/* function jugarPPT(nombreJugador) {
    let partidasGanadasJugador = 0;
    let partidasGanadasComputadora = 0;
    let i = 1;

    const nombreComputadora = "Computadora";

    for (i; ; i++) {
        let eleccionJugador = prompt(`${nombreJugador}, elige alguna de estas opciones: \n\n-Piedra \n-Papel \n-Tijera`).toLowerCase();

        while (eleccionJugador !== "piedra" && eleccionJugador !== "papel" && eleccionJugador !== "tijera") {
            eleccionJugador = prompt("Elige una opción válida:\n\n-Piedra \n-Papel \n-Tijera").toLowerCase();
        }

        const opciones = ['piedra', 'papel', 'tijera'];
        const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

        alert(`¡Haz elegido ${eleccionJugador}! \nLa ${nombreComputadora} eligió ${eleccionComputadora}`);

        let resultado;

        if (eleccionJugador === eleccionComputadora) {
            resultado = 'Empataron';
        } else if ((eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
            (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
            (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')) {
                resultado = 'Ganaste';
                partidasGanadasJugador++;
        } else {
            resultado = 'Perdiste';
            partidasGanadasComputadora++;
        }

        if (partidasGanadasJugador === 3 || partidasGanadasComputadora === 3) {
            break;
        }

        alert(`${resultado} esta ronda!`);
        alert(`Ronda ${i + 1} \n\n${nombreJugador}: ${partidasGanadasJugador} \n${nombreComputadora}: ${partidasGanadasComputadora}`);
    }

    if (partidasGanadasJugador > partidasGanadasComputadora) {
        alert(`${nombreJugador} ganó el juego en ${i} rondas!!`);
    } else if (partidasGanadasJugador < partidasGanadasComputadora) {
        alert(`La ${nombreComputadora} ganó el juego en ${i} rondas!!`);
    }
} */

export { jugarPPT };
