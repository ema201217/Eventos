window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  titulo.addEventListener("mouseover", (event) => {
    event.target.style.color = "lightgreen";
  });

  titulo.addEventListener("mouseout", (event) => {
    event.target.style.color = "black";
  });

  /* En moviesAdd.ejs vamos con un desafío bastante más complejo. Tenemos que crear una
máquina de estados. Nuestro objetivo será detectar cuando el usuario tipee de corrido la
palabra “secreto”, en el input para ingresar el título de la película. El problema es que
solamente podemos definir un evento cuando el usuario presiona una tecla y no cuando
escribe toda una palabra. Por eso es que para empezar el ejercicio vamos a definir una
variable estadoSecreto que empiece con el número 0. A partir de ahí, vamos a
implementar un código interno que solo nosotros sabemos: */

  const inputTitulo = document.querySelector("input#titulo");
  let estadoSecreto = 0;

  inputTitulo.addEventListener("keyup", function (e) {
    switch (true) {
      case e.key == "s" && estadoSecreto == 0:
        ++estadoSecreto;
        break;
      case e.key == "e" && estadoSecreto == 1:
        ++estadoSecreto;
        break;
      case e.key == "c" && estadoSecreto == 2:
        ++estadoSecreto;
        break;
      case e.key == "r" && estadoSecreto == 3:
        ++estadoSecreto;
        break;
      case e.key == "e" && estadoSecreto == 4:
        ++estadoSecreto;
        break;
      case e.key == "t" && estadoSecreto == 5:
        ++estadoSecreto;
        break;
      case e.key == "o" && estadoSecreto == 6:
        alert("Estado secreto!!!!");
        estadoSecreto = 0;
        break;
      default:
        estadoSecreto = 0;
        break;
    }
  });
};
