package main

import (
	"fmt"
	"strings"
)

func main() {
	var sentenca string
	fmt.Print("Escreva uma frase: ")
	fmt.Scanln(&sentenca)

	fraseCapitalizada := strings.Title(strings.ToLower(sentenca))
	fmt.Printf("A frase capitalizada é: %s", fraseCapitalizada)
}