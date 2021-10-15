// string
let nome : string = 'matheus'
console.log(nome)
//nome = 5  --> apresenta erro 
//nome = 'jose' --> funciona e altera o valor da variável

//numbers
let idade : number = 19
// idade = 'Ana'
//idade = 27.5 
//tipo numbers aceita int e float
console.log(idade)

//boolean 
let possuiHobbies : boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

//tipos explicitos
let minhaIdade : number // : any (por padrao)
minhaIdade = 19
console.log(typeof minhaIdade)
//minhaIdade = '19'
//console.log(typeof minhaIdade)

//array
let hobbies : any[] = ["cozinhar", "praticar esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100] // não é possivel essa linha se o tipo não for explicito
console.log(hobbies)

//tuplas
let endereco : [string, number] = ["Av Principal", 99]
console.log(endereco)

//enums
enum Cor{
    Cinza, //0
    Verde, //1
    Azul   //2
}

let minhaCor : Cor = Cor.Verde
console.log(minhaCor)

//any
let carro: any = 'BMW'
console.log(carro)
carro = {
    marca : 'BMW',
    ano : 2019
}
console.log(carro)
//não indicado

