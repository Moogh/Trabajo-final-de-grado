type Place = {
  id: number;
  name: string;
  description: string;
  city: string;
  features: Record<string, number>; // objeto con claves dinámicas numéricas
};

const lugar = {
  id: 41,
  name: "Capilla Nuestra Señora De La Concepción De El Overo",
  description: "Es considerada patrimonio cultural...",
  city: "Bugalagrande",
  features: {
    esLugarAbierto: 1,
    esLugarReligioso: 1,
    esGratis: 1,
    permiteMascotas: 0,
    esRural: 0,
    esAventura: 0,
    esAccesibleDiscapacidad: 1,
    tieneParqueadero: 1,
    esFamiliar: 1,
    tieneZonaCamping: 0,
    tieneRestaurante: 0,
    esEducativo: 1,
    requiereReserva: 0,
    esPatrimonioCultural: 1,
    sePuedeBailar: 0,
    aceptaPagoTarjeta: 0,
    tieneZonaServicios: 0,
    permiteEntradaDeComida: 1,
    permiteEntradaDeLicor: 0
  }
};

const lugar2 = {
  id: 41,
  name: "Capilla Nuestra Señora De La Concepción De El Overo",
  description: "Es considerada patrimonio cultural...",
  city: "Bugalagrande",
  features: {
    esLugarAbierto: 0,
    esLugarReligioso: 1,
    esGratis: 1,
    permiteMascotas: 0,
    esRural: 0,
    esAventura: 0,
    esAccesibleDiscapacidad: 1,
    tieneParqueadero: 1,
    esFamiliar: 1,
    tieneZonaCamping: 0,
    tieneRestaurante: 0,
    esEducativo: 1,
    requiereReserva: 0,
    esPatrimonioCultural: 1,
    sePuedeBailar: 0,
    aceptaPagoTarjeta: 1,
    tieneZonaServicios: 0,
    permiteEntradaDeComida: 1,
    permiteEntradaDeLicor: 1
  }
};

const lugar3 = {
  id: 41,
  name: "Capilla Nuestra Señora De La Concepción De El Overo",
  description: "Es considerada patrimonio cultural...",
  city: "Bugalagrande",
  features: {
    esLugarAbierto: 1,
    esLugarReligioso: 1,
    esGratis: 1,
    permiteMascotas: 1,
    esRural: 0,
    esAventura: 0,
    esAccesibleDiscapacidad: 1,
    tieneParqueadero: 1,
    esFamiliar: 1,
    tieneZonaCamping: 0,
    tieneRestaurante: 0,
    esEducativo: 1,
    requiereReserva: 0,
    esPatrimonioCultural: 1,
    sePuedeBailar: 1,
    aceptaPagoTarjeta: 1,
    tieneZonaServicios: 0,
    permiteEntradaDeComida: 0,
    permiteEntradaDeLicor: 1
  }
};
function CalculoRecomendacion(place: Place): number{
  const valores = Object.values(place.features ?? {});
  const total = valores.reduce((acc, valor) => acc + valor, 0);
  return total;
}

function similitud(placeA: Place, placeB: Place) {
  const keys = Object.keys(placeA.features);
  let score = 0;

  keys.forEach(key => {
    if (placeA.features[key] === placeB.features[key]) {
      // console.log(placeA.features[key])
      score++;
    }
  });

  return score / keys.length; // porcentaje
}
// Esta función sirve para calcular el SMC
function matching(placeA: Place, placeB: Place){
  const keys = Object.keys(placeA.features);
  let a = 0;
  let d = 0;
  let b = 0;
  let c = 0;
  let smc = 0;

  // Esta primer iteración sirve para ver si en ambos objetos hay 1 en la misma posición
  keys.forEach(key => {
    if (placeA.features[key] === 1 && placeB.features[key] === 1) {
      a++;
    }
  });

  // Esta primer iteración sirve para ver si en ambos objetos hay 0 en la misma posición
  keys.forEach(key => {
    if (placeA.features[key] === 0 && placeB.features[key] === 0) {
      d++;
    }
  });

  // Esta primer iteración sirve para ver si en ambos objetos hay 0 y 1 en la misma posición
  keys.forEach(key => {
    if (placeA.features[key] === 0 && placeB.features[key] === 1) {
      b++;
    }
  });

  // Esta primer iteración sirve para ver si en ambos objetos hay 1 y 0 en la misma posición
  keys.forEach(key => {
    if (placeA.features[key] === 1 && placeB.features[key] === 0) {
      c++;
    }
  });

  smc = (a+d) / (a+b+c+d)
  return smc; // porcentaje
}

console.log(similitud(lugar, lugar2)); // 0.8421052631578947
console.log(matching(lugar, lugar3)); // ejemplo: 0.5 (50%)
// console.log(matching(lugar, lugar2)); // 0.8421052631578947

export default CalculoRecomendacion;