function calcular() {
  let man = document.querySelector("#men");
  let woman = document.querySelector("#women");
  let kid = document.querySelector("#kids");
  let result = document.querySelector("#log");

  let unicesumar = (number1, number2, number3) => {
    var comidaMan = man.value * number1;
    var comidaWoman = woman.value * number2;
    var comidaKid = kid.value * number3;

    var comida = comidaMan + comidaWoman + comidaKid;

    return comida / 1000;
  };

  let carne = unicesumar(500, 300, 200);
  let frango = unicesumar(200, 200, 100);
  let linguiça = unicesumar(200, 200, 200);
  let refrigerante = unicesumar(300, 400, 200);
  let cerveja = unicesumar(800, 500, 0);

  result.style.display = "block";

  class Lista extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ul class="lista">
          <li>${carne}kg de Carne</li>
          <li>${frango}kg de Frango</li>
          <li>${linguiça}kg de Linguiça</li>
          <li>${refrigerante}L de Refrigerante</li>
          <li>${cerveja}L de Cerveja</li>
        </ul>
        `;
    }
  }

  customElements.define("log-lista", Lista);
}
