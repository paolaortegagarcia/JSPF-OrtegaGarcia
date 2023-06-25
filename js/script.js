import { jugarPPT } from './ppt.js';
import { jugarA } from './a.js';

const nombresJuegos = {
    ppt: "Piedra, Papel o Tijera",
    a: "Ahorcado",
    ttt: "Ta Te Ti"
};

class Juegos {
    
    constructor(nombreJuego, nombreJugador) {
        this.nombreJuego = nombreJuego;
        this.nombreJugador = nombreJugador;
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

        fetch("./js/instrucciones.json")
        .then(response => response.json())
        .then(data => {
            const instrucciones = data[this.nombreJuego];

            divJuego.innerHTML = `
                <h2 class="tituloJuego">${nombresJuegos[this.nombreJuego]}</h2>
                <div class="inst">
                    <p class="instruccionesJuego">${this.nombreJugador}, ${instrucciones.texto}</p>
                    ${instrucciones.reglas ? `<ul>${instrucciones.reglas.map(regla => `<li>${regla}</li>`).join("")}</ul>` : ""}
                    <button id="jugarbtn">Jugar</button>
                </div>
            `;
            
            let jugarbtn = document.getElementById("jugarbtn");

            jugarbtn.addEventListener("click", () => {
                jugarbtn.disabled = false;
                this.iniciarJuego();
                jugarbtn.disabled = true;
            });

            let tituloJuego = document.querySelector("#juegoElegido h2");
            let instruccionesJuego = document.querySelector("#juegoElegido p");
            tituloJuego.classList.add(this.nombreJuego);
            instruccionesJuego.classList.add("instruccionesJuego");
        })
        .catch(error => {
            console.error("Error al cargar las instrucciones:", error);
        });
    }


    iniciarJuego() {
        if (this.nombreJuego === "ppt") {
            console.log("Comienza el juego PPT");
            jugarPPT(this.nombreJugador);
        } else if (this.nombreJuego === "a") {
            console.log("Comienza el juego del Ahorcado");
            jugarA(this.nombreJugador);
        } else if (this.nombreJuego === "ttt") {
            console.log("Comienza el juego ta te ti");
            Toastify({
                text: "Disponible Proximamemente!",
                duration: 3000
            }).showToast();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    const juegosDisponibles = document.querySelector(".juegosDisponibles");
    const juego = document.querySelectorAll(".juego");

    juegosDisponibles.style.display = "none";

    juego.forEach((link) => {
        link.addEventListener("click", () => {
            let nombreJuego = link.classList[1];
            let nombreJugador = localStorage.getItem("nombreJugador");
            const juegos = new Juegos(nombreJuego, nombreJugador);
            
            if (nombreJuego === "ttt") {
                Toastify({
                    text: "Disponible Próximamente!",
                    duration: 3000
                }).showToast();
                
            } else {
                juegos.mostrarInstrucciones();
            }

        });
    });

    let nombreJugador = localStorage.getItem("nombreJugador");
    const juegos = new Juegos("",nombreJugador);
    juegos.mostrarNombre();
});




