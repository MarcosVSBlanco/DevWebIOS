class pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }
    getIdade() {
        const hoje = new Date();
        const anoAtual = hoje.getFullYear()
        const mesAtual = hoje.getMonth()
        const diaAtual = hoje.getDate()

        const anoNascimento = this.dataNascimento.getFullYear()
        const mesNascimento = this.dataNascimento.getMonth()
        const diaNascimento = this.dataNascimento.getDate()

        let idade = anoAtual - anoNascimento

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }
}
pessoa.prototype.getNiver = function () {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();

    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
      return true
    } else {
      return false
    }
  }

let pessoas = new Array(10);
pessoas[0] = new pessoa('Marcos', '1995-05-12')
pessoas[1] = new pessoa('Iris', '2020-04-30')
pessoas[2] = new pessoa('Raphaela', '1996-12-11')
pessoas[3] = new pessoa('Roseli', '1975-12-10')
pessoas[4] = new pessoa('Letícia', '2001-12-16')
pessoas[5] = new pessoa('Luciane', '1965-10-21')
pessoas[6] = new pessoa('Jorge', '1964-06-11')
pessoas[7] = new pessoa('Gigi', '2007-01-19')
pessoas[8] = new pessoa('John', '1980-04-03')
pessoas[9] = new pessoa('Marry', '1970-06-13')

for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i]
    const idade = pessoa.getIdade()
    const fezAniversario = pessoa.getNiver() ? "já" : " ainda não"
    console.log(`${pessoa.nome} tem ${idade} anos e ${fezAniversario} fez aniversário`)
}




