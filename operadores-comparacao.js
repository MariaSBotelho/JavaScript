const estaAprovado = true;

if (estaAprovado === true){
    console.log('aprovado');
}

if('0' == 0){ // == passa , compara o conteudo apenas. 
// === não passa, compara também o tipo da varivel
    console.log('passou na comparação');
} else {
    console.log('não passou na comparação');
}

//valor ternário 
const valor = 50;
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente';
console.log(texto); // retorna ‘valor suficiente’

//condição ?      caso 'true'    :     caso 'false'
//valor < 50 ? 'valor insuficiente' : 'valor suficiente';
// if (valor < 50){ console.log('Valor insuficiente')} else {Console.log('Valor suficiente')}
