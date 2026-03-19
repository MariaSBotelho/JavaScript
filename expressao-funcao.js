//expressão de função, a função é armazenada dentro de uma variavel
//so pode ser chamada depois que a função/variavel for declarada 

const estudanteReprovou = function (notaFinal, falta){
    if(notaFinal < 7 && falta > 4){
        return true;
    } else{
        return false;
    }
}

console.log(estudanteReprovou(7,4))
console.log(estudanteReprovou(10,2))