/*
promedio 

    (num1 + num2 +  num3) / 3

mediana 

    elemento de la mitad ordenando de menor a mayor (numero impar)
    para num par tomat los dos y sacar un promedio entre ellos

moda

elemento que mas se repite
*/

document
  .getElementById("btnAgregar")
  .addEventListener("click", agregarNumLista);

document
  .getElementById("btnCalcularPromedio")
  .addEventListener("click", calcularPromedio);
document
  .getElementById("btnCalcularModa")
  .addEventListener("click", calcularModa);
document
  .getElementById("btnCalcularMediana")
  .addEventListener("click", calcularMediana);

const lista = [100, 200, 300, 500];

let alerta = document.getElementById("alerta");
let listaAgregados = [];
let resultado = document.getElementById("resultado");
let resultadoAgregar = document.getElementById("listaAgregados");
let mensaje = document.getElementById("mensaje");

function promedio(lista, mostrar) {
  let suma = 0;
  for (let i = 0; lista.length > i; i++) {
    suma = suma + parseInt(lista[i]);
  }
  suma = (suma / lista.length).toFixed(2);
  mostrar.innerHTML = "El promedio es: " + suma;
}

function moda(lista, mostrar) {
  let suma = lista.reduce(function (acumulado = 0, elemento) {
    return acumulado + elemento;
  });
}

function mediana(lista, mostrar) {
  console.log("Mediana");
}

function agregarNumLista() {
  let limpiar = document.getElementById("numAgregar");
  let num = parseInt(limpiar.value);
  if (num > 0) {
    mensaje.innerText = "Lista de numeros para sacar promedios";
    console.log(num);
    listaAgregados.push(parseInt(num));
    num = "<li>" + num + "</li>";
    resultadoAgregar.innerHTML = resultadoAgregar.innerHTML + num;
    alerta.innerHTML = "";
    limpiar.value = "";
  } else {
    alerta.innerHTML = "Error<br>* El numero no puede ser menor o igual a 0";
  }
}

function calcularPromedio() {
  if (listaAgregados.length != 0) {
    promedio(listaAgregados, resultado);
    listaAgregados = [];
    resultadoAgregar.innerHTML = "";
    mensaje.innerText = "";
    alerta.innerHTML = "";
  } else {
    alerta.innerHTML =
      "Error<br>* Debe de contener al menos un numero para calcular el promedio";
  }
}

function calcularModa() {
  if (listaAgregados.length != 0) {
    moda(listaAgregados, resultado);
    listaAgregados = [];
    resultadoAgregar.innerHTML = "";
    mensaje.innerText = "";
    alerta.innerHTML = "";
  } else {
    alerta.innerHTML =
      "Error<br>* Debe de contener al menos un numero para calcular la moda";
  }
}

function calcularMediana() {
  if (listaAgregados.length != 0) {
    mediana(listaAgregados, resultado);
    listaAgregados = [];
    resultadoAgregar.innerHTML = "";
    mensaje.innerText = "";
    alerta.innerHTML = "";
  } else {
    alerta.innerHTML =
      "Error<br>* Debe de contener al menos un numero para calcular la mediana";
  }
}
