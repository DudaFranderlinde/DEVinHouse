package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Print("Digite uma frase: ")
	var text string;
	fmt.Scanln(&text)
	words := strings.Fields(text)
	fmt.Print("Quantidade de palavras na frase:", words)
}