let listValues = [];

function addValue() {
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
  debugger;
  listValues.push(value);
  renderList();
}

function deleteValue() {
  const element = document.getElementById('InputDelete');
  const resultValueDelete = document.getElementById('resultValueDelete');
  let value = parseInt(element.value);
  element.value = '';

  if (Number.isNaN(value) || value <= 0) {
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
