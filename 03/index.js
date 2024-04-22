let qualArea = prompt('Qual área você deseja seguir? [1]Front-End ou [2]Back-End')
let linguagem = ''

if (qualArea == 1) {
    linguagem = prompt('Prefere React ou Vue?')

} else if (qualArea == 2) {
    linguagem = prompt('Prefere C# ou Java?')

} else {
    alert('Você não digitou nenhuma resposta válida')
}

//Desafio Extra

let especializar = prompt('[1]Se especializar na área escolhida ou [2]Se tornar um FullStack')

if (especializar == 1) {
    alert(`Boa! Se continuar em ${linguagem}, será um expert nessa área!`)

} else if (especializar == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`)

} else {
    alert('Você não digitou nenhuma resposta válida')
}



//Desafio extra


let outrasTecs = prompt("Tem mais alguma tecnologia que você gostaria de aprender? [1]Sim ou [2]Não")

while (outrasTecs == 1) {
    let novaTecnologia = prompt('Qual?')

    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)

    outrasTecs = prompt("Tem mais alguma tecnologia que você gostaria de aprender? [1]Sim ou [2]Não")

}