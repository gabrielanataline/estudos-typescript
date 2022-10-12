"use strict";
//tipagem implicita 
let teste = 'exemplo de String';
// teste = 885
//erro porque acia essa variável receber um valor do tipo string e a baixo atribuo um valor numérico a essa variável.
//tipagem explicita
let pi = 85.24;
let teste1 = 'rrgww';
let logado = false;
let exemplo1 = [false, true, false, true];
//union types
let rg = 457;
//aceita um tipo ou outro
let nome = ["oi", "testando", "1234"];
nome = ["aaaa", "testando"];
let observe = {
    nome: 'Gabriela',
    idade: 28,
    sexo: 'F'
};
let observe1 = {
    nome: 'Gabriela',
    idade: 28,
};
//objeto, que recebe um array de objetos;
let observe2 = [
    {
        nome: 'Gabriela',
        idade: 28,
        sexo: 'F'
    }
];
let observe3 = [
    {
        nome: 'Gabriela',
        idade: 28,
    }
];
//array qye recebem um valor ou outro
let teste2 = [{
        a: 358,
        b: "teste",
        c: true
    },
    {
        d: true,
        e: false
    },
    {
        a: 2555,
        b: 4322
    }];
let exemplo2 = [];
exemplo2: [true, false, false, true];
let exemplo3 = [true, false, false, true];
const exemploArrayString = ['João', "Maria", 'José'];
exemploArrayString.push('Roberta');
const exemploArrayNumericos = [1, 2, 3, 4, 5];
const exemploArrayGuardarMaisDeUmValor = [1, 2, 3, 'Gabriela', 'Gabriel'];
const lista = ['dsfdf', 3, false];
const veja3 = [{ nome: 'Gabriela', idade: 28, sexo: 'f' }];
