let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
peso.focus();

//Função para realizar o calculo do imc
function getIMC() {
  // Condicional de validação dos valores de entrada.
  if (altura.value < 2.5 && peso.value < 300) {
    //Calculando o IMC
    let imc = peso.value / (altura.value * altura.value);    
    imc = imc.toFixed(2);
    
    // Adicionando um texto a um elemento vazio para exibir o resultado
    document.querySelector("#result").innerText = "Seu imc é de " + imc;
    // Classificação do IMC
    function checkIMC() {
      let text = "Classificação atual: ";
      if (imc < 18.5) {
        document.querySelector("#imc-info").innerText = text + "Desnutrição";
      } else if (imc >= 18.5 && imc <= 24.9) {
        document.querySelector("#imc-info").innerText = text + "Normal";
      } else if (imc >= 25.0 && imc <= 29.9) {
        document.querySelector("#imc-info").innerText = text + "Sobrepeso";
      } else if (imc >= 30.0 && imc <= 34.9) {
        document.querySelector("#imc-info").innerText = text + "Obesidade grau I";
      } else if (imc >= 35.0 && imc <= 39.9) {
        document.querySelector("#imc-info").innerText = text + "Obesidade grau II";
      } else if (imc > 40.0) {
        document.querySelector("#imc-info").innerText = text + "Obesidade grau III";
      }
    }
    // chamando a função.
    checkIMC();
  } else {
    document.querySelector("#result").innerText =
      "Os valores digitados são invalidos!";
   
  }
}

function removeValue (){
  document.querySelector("#result").innerText = "";
  document.querySelector("#imc-info").innerText = "";
// Limpa os valores digitados para uma nova consulta
    peso.value = "";
    altura.value = "";
}
 
