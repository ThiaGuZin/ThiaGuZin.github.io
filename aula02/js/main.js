//Criação de variáveis em Javascript
//Para capturar os elementos html
 
function somar() {
    if(verificarEntradasVazias()){
        resposta.textContent = 'Erro: preencha os dois campos numéricos'; 
             //Estilizando resposta com CSS
            resposta.classList.remove('certa');
            resposta.classList.add('errada'); 
    } else {
        atualizarResposta();
    }
 }
  
 function pegarNum1() {
    return num1.value;
 }
  
 function pegarNum2() {   
    return num2.value;
 }
  
 function verificarEntradasVazias() {
    if(pegarNum1() === '' || pegarNum2() === '') {
        return true;
    } else {
        return false;
    }
 }
  
 atualizarResposta = function() {
     //debugger;
    let num1 = pegarNum1();
    let num2 = pegarNum2();
    //let soma = parseInt(num1) + parseInt(num2) ;
    let soma = (parseFloat(num1) + parseFloat(num2)).toFixed(2);
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
    //Estilizando resposta com CSS
    resposta.classList.remove('errada');
    resposta.classList.add('certa');
 }
  
 //Seleção de grupo de elementos input
 let entradas = document.querySelectorAll('input');
 //Seleção de elemento pela sua classe
 let resposta = document.querySelector('.resposta');
 //Seleção de elemento pelo seu identificador
 let btnSomar = document.querySelector('#btnSomar');
 //Ouvir e capturar o evento de clique do mouse no botão
 btnSomar.addEventListener('click', somar);
  
 //Criação das variáveis num1 e num2
 let num1 = entradas[0];
 let num2 = entradas[1];