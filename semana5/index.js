import {saudacao} from './saudacao.js';

console.log(saudacao());

import saudacaoEspecial from './saudacao-especial.js';
console.log(saudacaoEspecial("Eduarda"));

class Produto{
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}