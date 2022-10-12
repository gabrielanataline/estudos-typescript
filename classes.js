"use strict";
//class, todas as propriedades de uma cachorro
// como se fosse uma forma de bolo
class Cachorro {
    /**
     * atributos ou propriedades
     */
    // nome: string //parametros
    // raca: string
    // cor: string
    // idade: number
    // peso: number
    // altura: number
    // morde: boolean
    // vacinado: boolean
    // pedigree: boolean
    /**
     * Método construtor
     *
     * Serve para ao criar um novo objeto de classe, possamos receber valores para que a classe utilize-os
     *
     * se o programador não criar o método construtor, a própia linguagem irá gerar um método construtor padrão
     *
     * ->> js e ts pode ter apenas um único método construtor!
     */
    //metodo construtor, está dentro de uma classe
    constructor(nome, //modificador de acesso! public e private, transforma parametro em propriedade
    raca, cor, idade, peso, altura, morde, vacinado, pedigree) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.morde = morde;
        this.vacinado = vacinado;
        this.pedigree = pedigree;
        // this.nome = nome //this - referencia a própria classa ela mesma
        // this.raca = raca
        // this.cor = cor
        // this.idade = idade
        // this.peso = peso
        // this.altura = altura
        // this.morde = morde
        // this.vacinado = vacinado
        // this.pedigree = pedigree
    }
    soma(a, b) {
        return a + b;
    }
}
/**
 * Objeto é uma instância de uma classe
 */
let c = new Cachorro('Mc Poze', 'Pitbull', 'branco', 3, 50, 0.8, false, true, true);
let c2 = new Cachorro('Justin Bieber', 'Husky', 'chocolate', 2, 24, 0.4, false, true, true);
console.log(c.nome, c.altura, c.morde, c.vacinado, c.peso);
console.log(c2);
