import { Personaje } from "./personaje";
import { Mago } from "./mago";
import { Arquero } from "./arquero";
import { Luchador } from "./luchador";

export function encontrarCajaMagica(personaje: Personaje): void {
  console.log(`${personaje.nombre} encontró una caja mágica.`);
  if (personaje instanceof Mago) {
    personaje.aprenderHechizo("Rayo congelante");
  } else if (personaje instanceof Arquero) {
    personaje.sumarFlechas(10);
  } else if (personaje instanceof Luchador) {
    personaje.entrenar();
  }
}
