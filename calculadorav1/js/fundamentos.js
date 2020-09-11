// Para ver esta mensagem é necessário pressionar F12 no 
// navegador.
console.log("fundamentos.js")

//Criação de varíavel
//Nome seguindo a  regra lowerCamerCase
//const = constante
const aluguelMensal = 500;
const aluguelAnual = 12 * aluguelMensal;

console.log('Aluguel Anual = ' + aluguelAnual);

//Tipos números, strings e boleanos
let primeiroNome = "Thiago";//let pode ser alterar
const segundoNome = "da Silva"; //const não pode ser alterado 


const idade = 15; //Número inteiro (int)
const altura = 1.67; //Número real (float)
const peso = 41;
 
//Concatenação de strings entre aspas e números com variáveis
let frase1 = "Meu nome é " + primeiroNome + " " + segundoNome +
", tenho " + idade + " anos, minha altura é de " +
altura + "m, e peso " + peso + "kg. Este sou eu!";
 
console.log(frase1);
//Uso de Template String para escrever uma frase
//ao invés de aspas, usa-se a crase.
const frase2 = `Meu nome é ${primeiroNome} ${segundoNome}, \
tenho ${idade} anos, minha altura é de ${altura}m, e peso \
${peso}kg. Este sou!`;
 
console.log(frase2);

const ceuEhAzul = true;
console.log('Tipo da variável Céu é azul: ' + typeof(ceuEhAzuç));

if (ceuEhAzul) {
    console.log("O céu é azul.");
} else {
    console.log("Eu pensava que  o céu fosse azul.");
}
//Controle de fluxo usando comparação
if (1 + 1 === 2) {
    console.log("1 + 1 nem sempre é 2!");
    console.log(typeof(1+1===2));
} else {
    console;log("Impossível!");
}

let amigosNoCinema = 10;
if(amigosNoCinema === 0) {
   console.log("Vai sobrar mais pipoca!");
} else if (amigosNoCinema < 10 ){
   //Senão se
   console.log("Vai dar para ver o filme sussa!");
} else {
   console.log("A gente veio aqui para fazer festa!");
}

//Repetição usando laço ou loop
amigosNoCinema = 0;
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 = 1
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 = 2
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 = 3
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
amigosNoCinema = amigosNoCinema + 1;//Incremento de 1 ...
console.log(`Amigos no cinema: ${amigosNoCinema}`);

//Repetição usando laço ou loop
amigosNoCinema = 0;
while (amigosNoCinema < 10){
    //Repetir enquanto amigosNoCinema <10
    amigosNoCinema += 1; //Incremnto de 1
}
console.log(`[while] amigos no cinema : ${amigosNoCinema}`);

amigosNoCinema = 0;
for (let i =0; i <10; i++) {
    amigosNoCinema++; 
}
console.log(`[for] Amigos no cinema: ${amigosNoCinema}`);

//Funções

//Função
function adicionarDois(numero) {
    //Esta função retorna o parâmetro 'numero'
    //adicionado o 2
    return numero + 2;
 }
  
 const respostaFinal = adicionarDois(8);
 console.log(`Resposta final = ${respostaFinal}`);
 

function digaOlah(primeiroNome, segundoNome, titulo, saudacao) {
    return `${primeiroNome} ${segundoNome}, ${titulo}, ${saudacao}`;
}

console.log(digaOlah('Tarc','Nux','professor','Alo Ha'));

console.log(digaOlah('Jack','Sparrow', 'captão', 'Warrrr'));

function adicionarCinco(numero) {
    //Variavel tem que ser criada dentro da função
    const total=numero + 5;
    return total;
}


console.log("O valor total é: " + adicionarCinco(25));

const pessoa = {
    primeiroNome: 'Tarcisio',
    segundoNome: 'Nunes',
    peso: 102,
    altura: 1.76,
    idade: 16
};

console.log(pessoa);

const frase = `${pessoa.primeiroNome} ${pessoa.segundoNome}, tem \
    ${pessoa.idade} anos, pesa ${pessoa.peso} kg e \
    mede ${pessoa.altura} m de altura.`
console.log(frase);

//Objeto com função 
const pessoa2 = {
    primeiroNome: 'Tarcisio',
    segundoNome: 'Nunes',
    peso: 102,
    altura: 1.76,
    idade: 16,
    imc() {//indice de massa corporal
        const valor = this.peso/(this.altura*this.altura);
        return valor;
         
    }
};

console.log(pessoa2.primeiroNome+ " tem imc = " + pessoa2.imc());
pessoa2.peso = 78;
console.log("Emagrecimento do Tarcnux! Peso: " + pessoa2.peso);
console.log(pessoa2);
console.log(pessoa2.primeiroNome+ " tem imc = " + pessoa2.imc());

const pessoa3 = {
    nome: {
        primeiro: "Tarcisio",
        segundo:'Nunes'
    },
    endereco: {
        rua: 'dos bobos',
        numero: '0',
        cidade: 'Brusxqui'
    }
}

console.log(`${pessoa3.nome.primeiro} ${pessoa3.nome.segundo} mora na Rua ${pessoa3.endereco.rua} número ${pessoa3.endereco.numero} na cidade de ${pessoa3.endereco.cidade}`);

//Arrays

const diaDaSemana = [
    'Domingo', 
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'

]

console.log(diaDaSemana);
console.log(diaDaSemana[0]);
console.log(diaDaSemana[6]);

for(let i=0; i<7; i++)
    console.log(`O dia de hoje é ${diaDaSemana[i]}`);

//Arrays de  Objetos
const cursos = [
    {professor: 'Tarcisio', UCr: 'LWEB'},
    {professor: 'Rodrigo O.', UCr: 'CMBD'},
    {professor: 'Rozana', UCr: 'Inglês'}
];


for(let i=0; i<cursos.length; i++)
    console.log(`Nome: ${cursos[i].professor} - UCr: ${cursos[i].UCr}`)
