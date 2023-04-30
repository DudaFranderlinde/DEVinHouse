package main

import (
    "fmt"
)

type Frutas struct {
    Descricoes map[string]string
};

func main() {
    frutas := Frutas{
        Descricoes: map[string]string{
            "maca": "é uma fruta que cresce em arvore",
            "banana": "é uma fruta amarela",
            "morango": "O morango é uma fruta vermelha, cuja origem é a Europa",
            "melancia": "A melancia é uma fruta rasteira, originária da África",
        },
    };

    descricaoBanana := frutas.Descricoes["banana"];
    fmt.Println(descricaoBanana);
};