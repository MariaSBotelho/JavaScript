if( 1 > 0 ) {  //bloco
    var estudante = 'caroline';
    console.log(estudante);
} //fim
//var permite alterar o valor da varivel mesmo ela sendo declarada dentro de um bloco
estudante = 'ana';
console.log(estudante);


if( 1 > 0 ) {
    let estudante = 'caroline';
    console.log(estudante);
}
//let são duas variaveis diferentes, uma dentro do bloco , e uma fora, quando não declarada ela automaticamente é let
estudante = 'ana';
console.log(estudante); 

let estudante = 'caroline';
if( 1 > 0 ) {
    console.log(estudante);
}

//escopos: globais, bloco, função

/* **globais: quando não é declarada dentro de nenhuma função ou bloco.
const nome = ‘Camila’; // variável global
function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}
cumprimentar(); // ‘Olá, Camila!”

   **bloco: 
if (1 > 0) {
let nome = ‘Ana’;
console.log(nome); // ‘Ana’
}
// variável `nome` não está acessível
console.log(nome); // Error: nome is not defined

   **função:
function cumprimentar() {
const nome = 'Camila'; // variável local
const cumprimento = 'Olá'; // variável local
console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
}

// as variáveis não podem ser acessada de fora da função
console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console
*/
