//1-Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada.
//Em seguida, chame a função e exiba a saudação no console.

function saudacao(nome){
    return `Olá ${nome}`;
}

console.log(saudacao('Maria'));

//2-Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18).
//Imprima o resultado no console.

function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    } else{
        return false;
    }
}

console.log(`É maior de idade? ${maiorDeIdade(14)}`);
console.log(`É maior de idade? ${maiorDeIdade(18)}`);

//3- Crie uma função que receba uma string e verifique se é um palíndromo 
//(uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse().
//Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

