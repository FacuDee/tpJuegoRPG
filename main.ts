import { Mago } from "./mago";
import { Arquero } from "./arquero";
import { Luchador } from "./luchador";
import { encontrarCajaMagica } from "./cajaMagica";

const mago = new Mago("Myldorf", 100, 50);
const arquero = new Arquero("Leónidas", 90, 20);
const luchador = new Luchador("Caballero Rojo", 120, 80);

mago.atacar();
mago.aprenderHechizo("Bola de fuego");

arquero.atacar();
arquero.sumarFlechas(5);

luchador.atacar();
luchador.entrenar();

encontrarCajaMagica(mago);
encontrarCajaMagica(arquero);
encontrarCajaMagica(luchador);

console.log(mago.getInfo());
console.log(arquero.getInfo());
console.log(luchador.getInfo());

// SE MUESTRA POR CONSOLA //

// Myldorf lanza un hechizo.
// Myldorf aprendió el hechizo: Bola de fuego
// Leónidas dispara una flecha (le quedan 19).
// Leónidas obtiene 5 flechas.
// Caballero Rojo ataca con un golpe fuerte.
// Caballero Rojo aumentó su fuerza a 85.
// Myldorf encontró una caja mágica.
// Myldorf aprendió el hechizo: Rayo congelante.
// Leónidas encontró una caja mágica.
// Leónidas obtiene 10 flechas.
// Caballero Rojo encontró una caja mágica.
// Caballero Rojo aumentó su fuerza a 90.
// Myldorf - Nivel: 1, Puntos de Vida: 100
// Leónidas - Nivel: 1, Puntos de Vida: 90
// Caballero Rojo - Nivel: 1, Puntos de Vida: 120.
