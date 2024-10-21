export abstract class Personaje {
  public nombre: string;
  private nivel: number;
  private puntosDeVida: number;

  constructor(nombre: string, puntosDeVida: number) {
    this.nombre = nombre;
    this.nivel = 1;
    this.puntosDeVida = puntosDeVida;
  }

  abstract atacar(): void;

  subirNivel(): void {
    this.nivel++;
    console.log(`${this.nombre} ha subido al nivel ${this.nivel}.`);
  }

  recibirDaño(cantidad: number): void {
    this.puntosDeVida -= cantidad;
    console.log(
      `${
        this.nombre
      } recibió ${cantidad} de daño. Vida restante: ${this.getPuntosDeVida()}.`
    );
    if (this.puntosDeVida <= 0) {
      console.log(`${this.nombre} ha sido derrotado.`);
    }
  }

  getPuntosDeVida(): number {
    return this.puntosDeVida;
  }

  getInfo(): string {
    return `${this.nombre} - Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosDeVida}.`;
  }
}
