import { Inyector } from './Inyector'

export class Reactor {
  private flujoTotal: number
  private inyectores: Array<Inyector> = new Array<Inyector>()

  constructor(
    public inyectorA: Inyector,
    public inyectorB: Inyector,
    public inyectorC: Inyector,
    public velocidad: number
  ) {

    this.flujoTotal = (this.velocidad * 300) / 100
  }

  agregarInyectoresValidos() {
    if (this.inyectorA.danio <= 99) {
      this.inyectores.push(this.inyectorA)
    }

    if (this.inyectorB.danio <= 99) {
      this.inyectores.push(this.inyectorB)
    }

    if (this.inyectorC.danio <= 99) {
      this.inyectores.push(this.inyectorC)
    }
  }

  calcularFlujoExtra() {
    var flujoExtra = 0

    flujoExtra = 0

    var totalDanio = 0
    this.inyectores.forEach(inyector => {
      totalDanio += inyector.danio
    })

    flujoExtra = (this.flujoTotal + totalDanio) / this.inyectores.length
    return flujoExtra
  }

  calcularFlujoPlasma() {
    var flujoPlasmaInyectores: Array<{}> = []

    this.inyectores.forEach(inyector => {
      flujoPlasmaInyectores.push({
        nombreInyector: inyector.nombre,
        plasma: this.calcularFlujoExtra() - inyector.danio
      })
    })

    return flujoPlasmaInyectores
  }

  calcularTiempo() {
    var inyectorMayorPlasma = 0
    for (var i = 1; i < this.inyectores.length; i++) {
      if (this.inyectores[i].calcularFlujoPlasmaConDanio() > inyectorMayorPlasma) {
        inyectorMayorPlasma = this.inyectores[i].calcularFlujoPlasmaConDanio()
      }
    }
    var tmpTiempo = 100 - (this.calcularFlujoExtra() - inyectorMayorPlasma)
    var tiempo = `${tmpTiempo} minutos`

    if (tmpTiempo > 100) {
      tiempo = 'Infinito'
    }
    return tiempo
  }
}