//parametros/ argumentos - para receber uma informação externa
//retorno - 
//função bloco de codigo que é executado ao ser chamado
//parametros devem ser chamados na orderm que foram declarados
//console.log- função que apenas registra informação no terminal, não faz nenhum processamento
//return - processa dados, precisa de console.log para ser exibido no terminal
//pode ser chamado em qualquer parte do codigo
function exibirInfoEstudante(nome, nota){
    return (`O nome é ${nome} e a nota é ${nota}`);
}

console.log(exibirInfoEstudante('Caroline', 10));
exibirInfoEstudante('Ana', 7);

//some dois numeros por uma função depois atriubua a uma variavel o resultado e exiba no console

function somarDoisNumeros(numA, numB){ //declara a função passando dois parametros
    return numA + numB;
} 

const resultado = somarDoisNumeros(2,2); //atribui á uma variavel e chama a função para ser executada.
console.log(resultado);



