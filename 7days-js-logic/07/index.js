function soma(valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function subtracao(valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function multiplicacao(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

function divisao(valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacao = "";

do {

    operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);

    //Se nenhuma das opções for escolhida, mostre uma msg e comece novamente.
    while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {

        alert(`Entrada não reconhecida!`);

        operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }

    //Se for sair, pare o loop
    if (operacao === "sair") {
        break;
    }

    valor1 = prompt(`Valor 1:`);
    valor2 = prompt(`Valor 2:`);

    switch (operacao) {

        case 'soma':
            alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
            break;

        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
            break;

        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
            break;

        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);
            break;
    }

} while (operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
alert(`Te vejo depois!`);