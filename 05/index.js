let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";

while (adicionarMais != "não") {

    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda '1' para sim ou '2' para não.");

    while (adicionarMais != "1" && adicionarMais != "2") {
        alert(`Operação não reconhecida!`);

        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda '1' para sim ou '2' para não.");
    }

    if (adicionarMais === "2") {
        break;
    }


    comida = prompt("Qual comida você deseja inserir?").toLowerCase();
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?").toLowerCase();

    if (categoria === 'frutas') {
        frutas.push(comida);

    } else if (categoria === 'laticínios') {

        laticinios.push(comida);
    } else if (categoria === 'doces') {

        doces.push(comida);
    } else if (categoria === 'congelados') {

        congelados.push(comida);

    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);