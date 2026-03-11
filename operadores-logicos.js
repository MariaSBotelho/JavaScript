// || ou
const notaFinal = 6;
const faltas = 2;
const advertencias = 0; // false

if (notaFinal < 7 || faltas > 4){ //   || ou
    console.log('Reprovado, boas festas');
}   else{
    console.log('Não foi reprovado por falta');
}

if ( faltas >= 2 && !advertencias){ //! not faltas = true / advertencias - false com ! = true
    console.log('Recebeu bonus');
}   else{
    console.log('Não recebeu');
}

// ! não

const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}

// && e

const idade = 25;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}