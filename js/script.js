import { jugarPPT } from './ppt.js';
import { jugarA } from './a.js';

const nombresJuegos = {
    ppt: "Piedra, Papel o Tijera",
    a: "Ahorcado",
};

class Juegos {
    constructor(nombreJuego, nombreJugador) {
        this.nombreJuego = nombreJuego;
        this.nombreJugador = nombreJugador;
        this.instruccionesJuego = {
        ppt: `Debes elegir entre piedra, papel o tijera. Cuando alguno de los dos jugadores llegue a 3 partidas ganadas, el juego terminará. \n 
                    - La piedra aplasta las tijeras.\n 
                    - El papel envuelve la piedra.\n 
                    - las tijeras cortan el papel.`,
        a: `Debes adivinar la palabra antes de que se completen 10 rondas.\n 
                    Adivina las letras una por una, si está presente en la palabra, aparecerá en su posicion correspondiente`,
        };
    }

    mostrarNombre() {
        const divJuego = document.getElementById("juegoElegido");

        divJuego.innerHTML = `
            <h2 class="tituloJuego">${nombresJuegos[this.nombreJuego]}</h2>
            <div class = "form">
                <input type="text" id="nombre" placeholder="Ingresa tu nombre">
                <button id="nombrebtn">></button>
            </div>
        `;

        let nombre = document.getElementById("nombre");
        let nombrebtn = document.getElementById("nombrebtn");

        nombrebtn.addEventListener("click", () => {
            this.nombreJugador = nombre.value;
            this.mostrarInstrucciones();
        });

        let tituloJuego = document.querySelector("#juegoElegido h2");
        tituloJuego.classList.add(this.nombreJuego);
    }

    mostrarInstrucciones() {
        const divJuego = document.getElementById("juegoElegido");

        divJuego.innerHTML = `
            <h2 class="tituloJuego">${nombresJuegos[this.nombreJuego]}</h2>
            <div class="inst">
                <p class="instruccionesJuego">${this.instruccionesJuego[this.nombreJuego]}</p>
                <button id="jugarbtn">Jugar</button>
            </div>
        `;

        let jugarbtn = document.getElementById("jugarbtn");

        jugarbtn.addEventListener("click", () => {
            this.iniciarJuego();
        });

        let tituloJuego = document.querySelector("#juegoElegido h2");
        let instruccionesJuego = document.querySelector("#juegoElegido p");
        tituloJuego.classList.add(this.nombreJuego);
        instruccionesJuego.classList.add("instruccionesJuego");
    }

    iniciarJuego() {
        if (this.nombreJuego === "ppt") {
            console.log("Comienza el juego PPT");
            jugarPPT(this.nombreJugador);
        } else if (this.nombreJuego === "a") {
            console.log("Comienza el juego del Ahorcado");
            jugarA(this.nombreJugador);
        }
    }
}

const juego = document.querySelectorAll(".juego");

juego.forEach((link) => {
    link.addEventListener("click", () => {
        let nombreJuego = link.classList[1];
        const juego = new Juegos(nombreJuego);
        juego.mostrarNombre();
    });
});

