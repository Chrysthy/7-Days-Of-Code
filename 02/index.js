let name = prompt('Qual é o seu nome?')
let age = prompt('Quantos anos você tem?')
let language = prompt('Qual linguagem de programação você está estudando?')

let msg = `'Olá, ${name}! Você tem ${age} e está aprendendo ${language}!'`

alert(msg)



let gosta = confirm(`Você gosta de estudar ${language}?`)

if (gosta == true) {
    alert('Muito bom! Continue estudando  você terá muito sucesso!')

} else {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}