export class Inyector {
  public flujoMax: number = 300
  constructor(public nombre: string, public danio: number) { }

  calcularFlujoPlasmaConDanio() {
    return 100 - this.danio
  }

  print() {
    console.log(`El daño es: ${this.danio}`)
  }
}