package main

import (
	"fmt"
)

func main() {
	fmt.Print("Digite um número inteiro: ")
	var num int
	fmt.Scanln(&num)

	fatorial := 1
	for i := 1; i <= num; i++ {
		fatorial *= i

	}

	fmt.Printf("%d!= %d", num, fatorial)
}