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
console.log(idade)
console.log(primeiroNome)

console.clear()
//Array de objetos
const alunosIOS = [
    {
        nomeAluno: "Higor Féquer",
        idade: 54,
        nota: 9
    },
    {
        nomeAluno: "Marcos",
        idade: 12,
        nota: 8
    },
    {
        nomeAluno: "Thainá Zerbinatti",
        idade: 35,
        nota:10
    }
]
console.log(alunosIOS)
console.log(alunosIOS[0])
console.log(alunosIOS[0].nota)

console.log(JSON.stringify(alunosIOS))

let jsonzinho = '[{"nomeAluno":"Higor Féquer","idade":54,"nota":9},{"nomeAluno":"Marcos","idade":12,"nota":8},{"nomeAluno":"Thainá Zerbinatti","idade":35,"nota":10}]'
console.log(JSON.parse(jsonzinho))