listValues = [];

//Helpers
function esPar(n) {
  return n % 2 === 0;
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
function clearText() {
  resultCalcular.style = 'display:none';
  resultValueDelete.innerHTML = '';
}

function renderList(list) {
  const lista = document.getElementById('list-values-precargados');
  lista.innerHTML = '';

  list.forEach((element, index) => {
    const listElement = document.createElement('li');
    listElement.innerHTML = `${index + 1}.- ${element.name} - <strong>${
      element.salary
    } USD</strong>`;

    lista.appendChild(listElement);
  });
}
function renderListValues(list) {
  const lista = document.getElementById('list-values');
  lista.innerHTML = '';

  list.forEach((element, index) => {
    const listElement = document.createElement('li');
    listElement.innerHTML = `${index + 1}.- <strong>${element} USD</strong>`;

    lista.appendChild(listElement);
  });
}

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
  renderListValues(listValues);
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
  renderListValues(listValues);
}

function limpiarLista() {
  clearText();
  if (validateParaCalcular()) {
    listValues.splice(0, listValues.length);
    resultCalcular.innerHTML = 'Se ha vaciado la lista de manera exitosa';
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
    renderListValues();
  }
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personMitad1 = lista[mitad - 1];
    const personMitad2 = lista[mitad];

    return (mediana = calcularMediaAritmetica([personMitad1, personMitad2]));
  } else {
    const personMitad = lista[mitad];
    return personMitad;
  }
}

function calcularMedianaSalaries(list) {
  const salariosSorted = list.sort(function (salaryA, salaryB) {
    return salaryA - salaryB;
  });

  const medianaGeneral = medianaSalarios(salariosSorted);
  return medianaGeneral;
}

function ejecutaCalcularMediana() {
  const checkList = document.getElementById('checkInput').checked;
  const resultCalcular = document.getElementById('resultCalcular');
  if (checkList) {
    const salarios = salaries.map(function (person) {
      return person.salary;
    });
    const salariosSorted = salarios.sort(
      (salaryA, salaryB) => salaryA - salaryB
    );
    const mediana = medianaSalarios(salariosSorted);
    resultCalcular.innerHTML = `La mediana es : ${mediana}`;
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
  } else if (validateParaCalcular()) {
    const listSorted = listValues.sort((salaryA, salaryB) => salaryA - salaryB);
    const mediana = medianaSalarios(listSorted);
    resultCalcular.innerHTML = `La mediana es : ${mediana}`;
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
  }
}

function ejecutaCalcularMediaTop10() {
  const checkList = document.getElementById('checkInput').checked;
  const resultCalcular = document.getElementById('resultCalcular');
  if (checkList) {
    const salarios = salaries.map((element) => element.salary);
    const listSorted = salarios.sort((salaryA, salaryB) => salaryA - salaryB);
    const newList = [...listSorted];
    const medianaTop10 = medianaSalarios(calcularTop10(newList));
    resultCalcular.innerHTML = `La mediana del Top 10 es : ${medianaTop10}`;
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
  } else if (validateParaCalcular()) {
    debugger;
    const listSorted = listValues.sort((salaryA, salaryB) => salaryA - salaryB);
    const newList = [...listSorted];
    const medianaTop10 = medianaSalarios(calcularTop10(newList));
    resultCalcular.innerHTML = `La mediana del Top 10 es : ${medianaTop10}`;
    resultCalcular.className = 'resultSuccess';
    resultCalcular.style = 'display:block';
  }
}

function calcularTop10(listSort) {
  debugger;

  const spliceStart = parseInt((listSort.length * 90) / 100);
  const spliceCount = parseInt(listSort.length - spliceStart);
  const listTop10 = listSort.splice(spliceStart, spliceCount);

  return listTop10;
}
