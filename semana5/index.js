import {saudacao} from './saudacao.js';

console.log(saudacao());

import saudacaoEspecial from './saudacao-especial.js';
console.log(saudacaoEspecial("Eduarda"));

// -----------------------------------------------

import {Pedido} from './Pedido.js';
import {Produto} from './Produto.js';

const produto1 = new Produto('Moletom Feminino', 40.00, true, 3 );
const produto2 = new Produto('Moletom Masculino', 50.00, true, 2 );
const produto3 = new Produto('Blazer Feminino', 80.00, true, 2 );
const produto4 = new Produto('Casaco Desportivo Femino', 50.00, false, 1);
const produto5 = new Produto('Casaco Desportivo Masculino', 50.00, true, 2)

const pedido1 = new Pedido(20220001, 'Luisa Camargo');
const pedido2 = new Pedido(20220002, 'Júlio Pachelo');

pedido1.adicionarProduto(produto1)
pedido1.adicionarProduto(produto3)
pedido1.adicionarProduto(produto4)


pedido2.adicionarProduto(produto2)
pedido2.adicionarProduto(produto5)




const pedidos = [pedido1,pedido2]
const lista = document.getElementById("lista");
import { insertInfoCard } from './elementos.js';


pedidos.forEach((pedido) => {
    lista.appendChild(insertInfoCard(pedido));
  });