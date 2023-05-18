let aluno = {
    primeiroNome: "Abraao",
    nota: 8,
    altura: 3.15,
    idade: 102,
    hobbies:["ping pong","Castor de Andrade","Futebol"],
    personalidade:"Jogador Caro",
    endereco: {
        numeroCasa: 34,
        nomeRua:"x",
        estado: "SP"
    }
}
console.log(aluno)
console.log(aluno.nota)
console.log(aluno.hobbies[1])

console.log(aluno.endereco.numeroCasa)

console.clear()
//desestruturação do objeto
const {
    primeiroNome,
    idade,
    nota
} = aluno

console.log(nota)