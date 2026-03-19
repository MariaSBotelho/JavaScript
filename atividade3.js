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

function verificaPalindromo(letra){

    if(letra.toLowerCase() === letra.toLowerCase().split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindromo('arara')); //true 
console.log(verificaPalindromo('computador')); //false

//split('')= Transforma a string em um Array de letras (ex: ['a', 'b'])
//toLowerCase()= Padroniza a string para letras minúsculas.
//reverse()= Inverte a ordem dos elementos dentro do Array.
//join('')= Pega o Array invertido e o transforma em string novamente.

//4-Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles.
//Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior.
//Imprima o maior valor no console.

function verificaMaior(a , b , c){
    if(a > b > c){
        return 'A é maior';
    } else if(b > a > c){
        return 'B é maior';
    } else if(c > a > b){
        return ''
    }
}



//5-Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente.
//A função deve calcular a potência da base elevada ao expoente e retornar o resultado.