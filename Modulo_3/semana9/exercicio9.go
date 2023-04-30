package main

import (
	"fmt"
)

func main() {
	fmt.Print("Digite um número:")
	var num int
	fmt.Scanln(&num)
	resultado := parOuImpar(num);
	fmt.Printf("%d é %s\n", num, resultado);
};


func parOuImpar(num int) string {
	if num%2 == 0 {
		return "par";
	} else {
		return "ímpar";
	};
};
