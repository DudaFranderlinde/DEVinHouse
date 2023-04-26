package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Print("Digite uma sentença: ")
	var text string
	fmt.Scanln(&text)

	words := strings.Fields(text)
	countWords := make(map[string]int)

	for _, word := range words {
		word = strings.ToLower(word)
		countWords[word]++
	}

	fmt.Println("Palavras repetidas:")
	for word, count := range countWords {
		if count > 1 {
			fmt.Printf("%s: %d\n", word, count)
		}
	}
}