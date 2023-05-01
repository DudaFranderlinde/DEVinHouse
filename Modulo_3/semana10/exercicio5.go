package main

import (
	"math/rand"
)

type Minerador interface {
	Minerar(minerador MineradorDeBitcoin) int;
}

type MineradorDeBitcoin struct {
	
}

type Carteira interface {
	enviar(valor float32, endereco Endereco)
	receber(valor float32, endereco Endereco)
	consultarSaldo(endereco Endereco)
}

type Endereco struct {
	chavePublica string
	chavePrivada string
}


func main() {
	var carteira Carteira;
	endereco := Endereco{chavePublica: "a6eDG2q4d*2%", chavePrivada: "n0*cuWFO386X"}

	enviarBitcoin(carteira, 150.85, endereco);

	var minerador Minerador;
	var mineradorDeBitcoin MineradorDeBitcoin;

	minerador.Minerar(mineradorDeBitcoin);
}

func enviarBitcoin(carteira Carteira, valor float32, endereco Endereco) {
	carteira.enviar(valor, endereco)
}

func (mineradorDeBitcoin MineradorDeBitcoin) Minerar(minerador Minerador) int {
	return rand.Intn(7);
}