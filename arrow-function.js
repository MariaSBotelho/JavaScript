//função de flecha 
//so pode ser chamada depois de declarada, não é 'içada' do codigo.
//hoisting
//diminui o codigo
//muito utilizados para funçoes dentro de funçoes

//const estudanteReprovou = function (notaFinal, falta){
const estudanteReprovou = (notaFinal, falta) => {
    if(notaFinal < 7 && falta > 4){
        return true;
    } else{
        return false;
    }
}

console.log(estudanteReprovou(7,4))
console.log(estudanteReprovou(10,2))

//const exibeNome = funtion(nome){ return nome;}
const exibeNome = (nome) => nome
