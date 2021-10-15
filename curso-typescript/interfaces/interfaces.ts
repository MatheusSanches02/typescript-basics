interface Humano{
    nome : string
    idade? : number //? indica atributo opcional
    saudarSobrenome(sobrenome : string) : void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá, ' + pessoa.nome)
    //console.log(pessoa.idade) --> não funciona se nao estiver definido em Humano, pois no parametro passa apenas nome
}

function mudarNome(pessoa : Humano){
    pessoa.nome = 'Giovanna'
}

const pessoa: Humano = {
    nome: 'Matheus',
    idade: 19,
    saudarSobrenome(sobrenome: string){
        console.log('Olá, ' + this.nome + ' ' + sobrenome)
    }
}


saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

pessoa.saudarSobrenome('Lothbrok')

//Usando Classes

class Cliente implements Humano{
    nome: string = ''
    ultimaCompra: Date = new Date
    saudarSobrenome(sobrenome: string){
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudarSobrenome('Solo')
console.log(meuCliente.ultimaCompra)

//Interface Função

interface FuncaoCalculo{
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number) : number{
    return base ** exp
}

console.log(potencia(2,2))