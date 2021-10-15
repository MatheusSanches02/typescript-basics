"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
    //console.log(pessoa.idade) --> não funciona se nao estiver definido em Humano, pois no parametro passa apenas nome
}
function mudarNome(pessoa) {
    pessoa.nome = 'Giovanna';
}
var pessoa = {
    nome: 'Matheus',
    idade: 19,
    saudarSobrenome: function (sobrenome) {
        console.log('Olá, ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudarSobrenome('Lothbrok');
//Usando Classes
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    Cliente.prototype.saudarSobrenome = function (sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudarSobrenome('Solo');
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(2, 2));
