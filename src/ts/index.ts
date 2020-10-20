import { Reactor } from './Reactor'
import { Inyector } from './Inyector'

const init = function () {
  const reactor = new Reactor(
    new Inyector('Inyector A', 0),
    new Inyector('Inyector B', 0),
    new Inyector('Inyector C', 0), 30)

  reactor.agregarInyectoresValidos()
  console.log(`Flujo extra: ${reactor.calcularFlujoExtra()}`)
  console.log('Flujo de plasma de los inyectores:', reactor.calcularFlujoPlasma())
  console.log(`Tiempo de vida: ${reactor.calcularTiempo()}`)
}

window.addEventListener('load', init)