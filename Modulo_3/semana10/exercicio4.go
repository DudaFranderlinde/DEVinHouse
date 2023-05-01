package main

type Carteira interface {
	Enviar(valor float32, endereco Endereco)
	Receber(valor float32, endereco Endereco)
	ConsultarSaldo(endereco Endereco)
}

type Endereco struct {
	chavePublica string
	chavePrivada string
}

func enviarBitcoin(carteira Carteira, valor float32, endereco Endereco) {
	carteira.Enviar(valor, endereco)
}

func main() {
	var carteira Carteira;
	endereco := Endereco{chavePublica: "a6eDG2q4d*2%", chavePrivada: "n0*cuWFO386X"}

	enviarBitcoin(carteira, 150.85, endereco);
}