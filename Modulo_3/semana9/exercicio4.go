package main

import (
    "fmt"
)

type Frutas struct {
    Descricoes map[string]string
};

func main() {
	fmt.Print("Qual fruta você deseja consultar? \n");
	var fruta string;
	fmt.Scanln(&fruta);

    frutas := Frutas{
        Descricoes: map[string]string{
            "maca": "A maçã é uma fruta que cresce em arvore",
            "banana": "A banana é uma fruta amarela",
            "morango": "O morango é uma fruta vermelha, cuja origem é a Europa",
            "melancia": "A melancia é uma fruta rasteira, originária da África",
        },
    };

    descricao := frutas.Descricoes[fruta];
    fmt.Println(descricao);
};