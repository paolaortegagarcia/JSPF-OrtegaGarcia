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
            ppt: `
                <p>Debes elegir entre piedra, papel o tijera.</p><p>Cuando alguno de los dos jugadores llegue a 3 partidas ganadas, el juego terminará.</p>
                            <p>- La piedra aplasta las tijeras.</p> 
                            <p>- El papel envuelve la piedra.</p> 
                            <p>- las tijeras cortan el papel.</p>
            `,
            a: `
                <p>Debes adivinar la palabra antes de que se completen 10 rondas.
                            <p>Adivina las letras una por una, si está presente en la palabra, aparecerá en su posicion correspondiente
            `,
        };
    }

    mostrarNombre() {
        let nombre = document.getElementById("nombre");
        let nombrebtn = document.getElementById("nombrebtn");

        nombrebtn.addEventListener("click", () => {
            this.nombreJugador = nombre.value;
            localStorage.setItem("nombreJugador", this.nombreJugador);
            console.log(this.nombreJugador);
            this.ocultarNombre();
            this.mostrarJuegos();
        });

    }

    ocultarNombre() {
        let ocultarNombre = document.getElementById("form");
        ocultarNombre.style.display = "none";
    }

    mostrarJuegos() {
        const juegosDisponibles = document.querySelector(".juegosDisponibles");
        juegosDisponibles.style.display = "flex";
    }

    mostrarInstrucciones() {
        const divJuego = document.getElementById("juegoElegido");

        divJuego.innerHTML = `
            <h2 class="tituloJuego">${nombresJuegos[this.nombreJuego]}</h2>
            <div class="inst">
                <p class="instruccionesJuego">${this.nombreJugador}, ${this.instruccionesJuego[this.nombreJuego]}</p>
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

document.addEventListener("DOMContentLoaded", () => {
    let nombreJugador = localStorage.getItem("nombreJugador");
    const juegosDisponibles = document.querySelector(".juegosDisponibles");
    const juego = document.querySelectorAll(".juego");

    juegosDisponibles.style.display = "none";

    juego.forEach((link) => {
        link.addEventListener("click", () => {
            let nombreJuego = link.classList[1];
            const juegos = new Juegos(nombreJuego, nombreJugador);
            juegos.mostrarInstrucciones();
        });
    });

    const juegos = new Juegos(nombreJugador);
    juegos.mostrarNombre();
});




