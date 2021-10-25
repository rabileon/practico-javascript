let listValues = [];
const resultValueDelete = document.getElementById('resultValueDelete');
function addValue() {
  clearText();
  const resultValue = document.getElementById('resultValue');
  const inputNumber = document.getElementById('InputValorLista');
  resultValue.innerHTML = '';
  const value = parseInt(inputNumber.value);
  inputNumber.value = '';

  if (Number.isNaN(value) || value < 0) {
    resultValue.innerHTML = 'Ingrese el valor.';
    resultValue.className = 'resultError';
    return;
  }
  listValues.push(value);
  renderList();
}

function deleteValue() {
  clearText();
  const element = document.getElementById('InputDelete');

  let value = parseInt(element.value);
  element.value = '';

  if (Number.isNaN(value) || value <= 0 || value > listValues.length) {
    resultValueDelete.innerHTML = 'Ingrese una posición válida';
    resultValueDelete.className = 'resultError';
    return false;
  }
  listValues.splice(value - 1, 1);
  renderList();
}

function renderList() {
  const lista = document.getElementById('list-values');
  lista.innerHTML = '';

  listValues.forEach((element, index) => {
    const listElement = document.createElement('li');
    listElement.innerHTML = `${index + 1}.-  <strong>${element}</strong>`;

    lista.appendChild(listElement);
  });
}

function calcularPromedio() {
  clearText();
  const resultCalcular = document.getElementById('resultCalcular');

  if (validateParaCalcular()) {
    const promedio = calcularMediaAritmetica(listValues);
    resultCalcular.innerHTML = `El promedio es de: ${promedio}`;
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
  }
}

function calcularMediaAritmetica(list) {
  const sumaList = list.reduce((valorAcumulado, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  }, 0);

  const mediaAritmetica = sumaList / list.length;
  return parseFloat(mediaAritmetica.toFixed(2));
}

function clearText() {
  resultCalcular.style = 'display:none';
  resultValueDelete.innerHTML = '';
}

function validateParaCalcular() {
  if (listValues.length == 0) {
    resultCalcular.innerHTML =
      'La lista se encuentra vacía, por favor ingresa valores';
    resultCalcular.className = 'resultError';
    resultCalcular.style = 'display:block';
    return false;
  }
  return true;
}

function limpiarLista() {
  clearText();
  if (validateParaCalcular()) {
    listValues.splice(0, listValues.length);
    resultCalcular.innerHTML = 'Se ha vaciado la lista de manera exitosa';
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
    renderList();
  }
}

function ejecutaCalcularModa() {
  clearText();
  const resultCalcular = document.getElementById('resultCalcular');

  if (validateParaCalcular()) {
    const moda = calcularModa();
    resultCalcular.innerHTML = `La moda es : ${moda}`;
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
  }
}

function calcularModa() {
  const lista1Count = {};

  listValues.map(function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });

  const lista1Array = Object.entries(lista1Count).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  const moda = lista1Array[lista1Array.length - 1][0];

  return moda;
}

function esPar(value) {
  return value % 2 === 0 ? true : false;
}

function ejecutaCalcularMediana() {
  clearText();
  const resultCalcular = document.getElementById('resultCalcular');

  if (validateParaCalcular()) {
    const mediana = calcularMediana();
    resultCalcular.innerHTML = `La mediana es : ${mediana}`;
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
  }
}

function calcularMediana() {
  const listaOrdenada = listValues.sort(function (a, b) {
    return a - b;
  });

  const mitadLista = parseInt(listaOrdenada.length / 2);

  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const mediana = calcularMediaAritmetica([elemento1, elemento2]);
    return mediana;
  } else {
    const mediana = listValues[mitadLista];
    return mediana;
  }
}
