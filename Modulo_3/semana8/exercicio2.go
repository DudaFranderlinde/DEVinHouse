package main

import (
	"fmt"
)

func main()  {
	fmt.Print("Digite uma palavra: ")
	var word string;
	fmt.Scanln(&word)
	fmt.Println("O tamanho de sua palavra é igual a", len(word))
}