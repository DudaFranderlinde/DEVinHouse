package main

import (
	"fmt"
)

func main() {
	fmt.Print("Qual número do dia da semana você quer? \n");
	var num int;
	fmt.Scanln(&num);

	switch num {
		case 1: fmt.Println("Segunda-Feira");
		break;

		case 2: fmt.Println("Terça-Feira");
		break;

		case 3: fmt.Println("Quarta-Feira");
		break;

		case 4: fmt.Println("Quinta-Feira");
		break;

		case 5: fmt.Println("Sexta-Feira")
		break;

		case 6: fmt.Println("Sábado")
		break;

		case 7: fmt.Println("Domingo")
		break;

		default: fmt.Println("Valor inválido")
	}
}