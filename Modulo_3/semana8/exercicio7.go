package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Print("Digite uma palavra: ")
	var word string
	fmt.Scanln(&word)

	word = strings.ToLower(word)
	word = strings.ReplaceAll(word, " ", "")

	ehPalindromo := true
	for i := 0; i < len(word)/2; i++ {
		if word[i] != word[len(word)-i-1] {
			ehPalindromo = false
			break
		}
	}

	if ehPalindromo {
		fmt.Println("A string é um palíndromo!")
	} else {
		fmt.Println("A string não é um palíndromo!")
	}
}