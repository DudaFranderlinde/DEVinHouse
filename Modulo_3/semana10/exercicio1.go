package main

import "fmt"

type Book struct {
	title string;
	author string;
	publishedYear int;
	pages int;
}

func main() {
	livro := []Book {
		{title: "A Rainha Vermelha", author: "Victoria Aveyard", publishedYear: 2015, pages: 467},
		{title: "Verity", author: "Colleen Hoover", publishedYear: 2020, pages: 307},
		{title: "Escola dos Mortos", author: "Karine Vidal", publishedYear: 2019, pages:987},
	};

	fmt.Println(livro)
}