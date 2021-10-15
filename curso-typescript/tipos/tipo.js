"use strict";
// string
var nome = 'matheus';
console.log(nome);
//nome = 5  --> apresenta erro 
//nome = 'jose' --> funciona e altera o valor da variável
//numbers
var idade = 19;
// idade = 'Ana'
//idade = 27.5 
//tipo numbers aceita int e float
console.log(idade);
//boolean 
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explicitos
var minhaIdade; // : any (por padrao)
minhaIdade = 19;
console.log(typeof minhaIdade);
//minhaIdade = '19'
//console.log(typeof minhaIdade)
//array
var hobbies = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100]; // não é possivel essa linha se o tipo não for explicito
console.log(hobbies);
//tuplas
var endereco = ["Av Principal", 99];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; //2
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
//any
var carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019
};
console.log(carro);
//não indicado
