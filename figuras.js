// Código del cuadrado

console.group('Cuadrados');
// const ladoCuadrado = 5
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log(`El perímetro del cuadrado es: ${ladoCuadrado} cm`);

function areaCuadrado(lado) {
  return lado * lado;
}

// console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();

//Código del triángulo
// console.group('Triangulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//   `Los lados del triángulo miden:
//   ${ladoTriangulo1} cm,
//   ${ladoTriangulo2} cm,
//   ${baseTriangulo} cm`
// );

// console.log(`La altura del triángulo es de: ${alturaTriangulo} cm`);

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log(`El perímetro del triángulo es de: ${perimetroTriangulo} cm`);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log(`El area del triángulo es de: ${areaTriangulo} cm^2`);

console.groupEnd();

// Código del círculo
console.group('Círculos');
//Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo} cm`);
//Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diámetro del círculo es: ${diametroCirculo} cm`);
//PI
const PI = Math.PI;
console.log(`El PI es: ${PI}`);
//Circuferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log(`El perímetro del círculo es: ${perimetroCirculo} cm`);
//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log(`El area del círculo es: ${areaCirculo} cm^2`);

console.groupEnd();

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularAlturaTrianguloIsoceles(ladoA, ladoB, base) {
  if (ladoA != ladoB) {
    console.log('Los lados a y b no son iguales');
  } else {
    const catetoB = Math.pow(base / 2, 2);

    const hipotenusa = Math.pow(ladoA, 2);

    const catetoA = hipotenusa - catetoB;

    const altura = Math.sqrt(catetoA);

    console.log(altura);
  }
}

calcularAlturaTrianguloIsoceles(10, 10, 4);
