package main

import (
	"fmt"
)

func main() {
	fmt.Print("Digite um número inteiro: ")
	var num int;
	fmt.Scanln(&num)

	fmt.Print("Números primos:")
	for i := 2; i < num; i++ {
		if numPrimo(i) {
			fmt.Printf(" %d", i)
		}
	}
}

func numPrimo(num int) bool {
	for j := 2; j < num; j++ {
		if num % j == 0 {
			return false;
		}
	}
	return true;
}