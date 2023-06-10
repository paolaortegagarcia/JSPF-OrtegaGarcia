function jugarPPT(nombreJugador) {

    function ocultarContenedorPPT() {
        const datosJuego = {
            nombreJugador,
            partidasGanadasJugador,
            partidasGanadasComputadora,
        };
        const datosJuegoJSON = JSON.stringify(datosJuego);
        console.log("Datos del juego:", datosJuegoJSON);

        divJuego.remove();
    }

    let partidasGanadasJugador = 0;
    let partidasGanadasComputadora = 0;
    const nombreComputadora = "Computadora";

    const opcionesJugador = ["Piedra", "Papel", "Tijera"];

    const espacioJuego = document.getElementById("juegoElegido");
    const divJuego = document.createElement("div");
    divJuego.classList.add("containerPPT");

    espacioJuego.appendChild(divJuego);

    const divContenedorJuego = document.createElement("div");
    divContenedorJuego.classList.add("contenedorJuego");
    divJuego.appendChild(divContenedorJuego);

    const botones = document.createElement("div");
    botones.classList.add("opciones");

    opcionesJugador.forEach((opcion) => {
        const boton = document.createElement("button");
        boton.classList.add(`${opcion.toLowerCase()}`);
        boton.textContent = opcion;

        boton.addEventListener("click", () => {
            mostrarEleccion(opcion);
        });

        botones.appendChild(boton);
    });
    divContenedorJuego.appendChild(botones);

    const eleccionJugador = document.createElement("div");
    eleccionJugador.classList.add("eleccionJugador");
    divContenedorJuego.appendChild(eleccionJugador);

    const eleccionComputadora = document.createElement("div");
    eleccionComputadora.classList.add("eleccionComputadora");
    divContenedorJuego.appendChild(eleccionComputadora);

    const resultadoJuego = document.createElement("div");
    resultadoJuego.classList.add("resultadoJuego");
    divContenedorJuego.appendChild(resultadoJuego);

    function mostrarEleccion(opcionJugador) {
        const resultadoComputadora =
        opcionesJugador[Math.floor(Math.random() * opcionesJugador.length)];

        eleccionJugador.innerHTML = `
            <h4 class="eleccionJugadorTitulo">${nombreJugador} elige:</h4>
            <h2 class="eleccionJugadorValor">${opcionJugador}</h2>
        `;

        eleccionComputadora.innerHTML = `
            <h4 class="eleccionComputadoraTitulo">${nombreComputadora} elige:</h4>
            <h2 class="eleccionJugadorValor">${resultadoComputadora}</h2>
        `;

        mostrarResultado(opcionJugador, resultadoComputadora);
    }

    function mostrarResultado(opcionJugador, resultadoComputadora) {
        let resultado = "";

        if (opcionJugador.toLowerCase() === resultadoComputadora.toLowerCase()) {
            resultado = "Empataron";
        } else if (
            (opcionJugador.toLowerCase() === "piedra" &&
            resultadoComputadora.toLowerCase() === "tijera") ||
            (opcionJugador.toLowerCase() === "papel" &&
            resultadoComputadora.toLowerCase() === "piedra") ||
            (opcionJugador.toLowerCase() === "tijera" &&
            resultadoComputadora.toLowerCase() === "papel")
        ) {
            resultado = "Ganaste";
            partidasGanadasJugador++;
        } else {
            resultado = "Perdiste";
            partidasGanadasComputadora++;
        }

        let resultadoPartida = resultadoJuego.querySelector(".resultadoPartida");
        if (resultadoPartida) {
            resultadoPartida.textContent = resultado;
        } else {
            resultadoPartida = document.createElement("div");
            resultadoPartida.classList.add("resultadoPartida");
            resultadoPartida.textContent = resultado;
            resultadoJuego.appendChild(resultadoPartida);
        }

        if (partidasGanadasJugador === 3 || partidasGanadasComputadora === 3) {
            if (partidasGanadasJugador > partidasGanadasComputadora) {
                Swal.fire(
                    `${nombreJugador} ganó el juego!!`
                    )
                ;
            } else if (partidasGanadasJugador < partidasGanadasComputadora) {
                Swal.fire(
                    `La ${nombreComputadora} ganó el juego!!`
                    )
                ;
            }
            ocultarContenedorPPT();
        } else {
                mostrarPuntaje(
                `${nombreJugador}: ${partidasGanadasJugador} \n${nombreComputadora}: ${partidasGanadasComputadora}`
            );
        }

    }


    function mostrarPuntaje(puntaje) {

        let puntajeJuego = resultadoJuego.querySelector(".puntajeJuego");
        if (puntajeJuego) {
            puntajeJuego.textContent = puntaje;
        } else {
            puntajeJuego = document.createElement("div");
            puntajeJuego.classList.add("puntajeJuego");
            puntajeJuego.textContent = puntaje;
            resultadoJuego.appendChild(puntajeJuego);
        }

    }

}

export { jugarPPT };
