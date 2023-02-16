// Adicionando o parametro num ao botao pressionado que recebe o valor
// de acordo com o valor estipulado no HTML
function addToInput(num) {
    document.getElementById('resultado').value += num; // aqui, adiciona o numero ou operador no
                                                       // campo de entrada da calculadora
  } 
  
// É acionado quando pressionado o botao ON
// ele limpa o campo de entrada para uma string vazia
  function clearInput() {
    document.getElementById('resultado').value = '';
  }
  

// Aperte o botao = e chame essa funcao
  function calculate() {
    var input = document.getElementById('resultado').value; // Obtem valor de entrada
    var result = eval(input); // o eval e usado para avaliar a expressao matematica presente na string
    document.getElementById('resultado').value = result; // Mosttra o resultado da operacao
  }