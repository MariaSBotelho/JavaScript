//1- Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária,
// depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
// considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 100;
let saque = 25; 
let deposito = 50;

let operacao = saldo - saque;
saldo = operacao;
console.log(`Saque realizado com sucesso! seu saldo é : ${saldo}`);

operacao = saldo + deposito;
saldo = operacao;
console.log(`Deposito realizado com sucesso! seu saldo é : ${saldo}`);

//2- Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor 
// é par ou ímpar. Exiba o resultado no console.

let vnumber = 5;
vnumber % 2 === 0 ? console.log('Número par') : console.log('Número impar');

//3- Considere uma situação em que você está verificando se um usuário está logado e tem permissão de 
//administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular 
//essas condições e use o operador AND para verificar se ambas são verdadeiras.

const estaLogodo = true;
const temPermissao = true;

if(estaLogodo === true && temPermissao === true){
    console.log('Permissão concedida.');
} else{
    console.log('Tente novamente!');
}
 
//4- Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é 
// verdadeira. Exiba o resultado no console.

let v1 = true;
let v2 = false;

if(v1 === true || v2 === true){
    console.log('Pelo menos uma variavel é verdadeira');
} else{
    console.log('Variaveis falsas.');
}

//5- Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso 
//para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário 
//e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

let idadeUsuario = 17;
let idadeMinima = 18;

if(idadeUsuario >= idadeMinima ){
    console.log('O usuário pode realizar a compra do ingresso!');
} else {
    console.log('Usuário deve ser maior de idade para realizar a compra!')
}