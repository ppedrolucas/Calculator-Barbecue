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

  var vetor = [carne, frango, linguiça, refrigerante, cerveja];
  result.style.display = "block";

  result.innerHTML = `<p>Ingredientes necessários:</p>
  <ul class="lista">
    <li>${carne}kg de carne</li>
    <li>${frango}kg de frango</li>
    <li>${linguiça}kg de linguiça</li>
    <li>${refrigerante}L de refrigerante</li>
    <li>${cerveja}L de cerveja, OBS: Crianças não contam 👍</li>
  </ul>`;
}
