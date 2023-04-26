package main

import (
	"fmt"
)

func main() {
	fmt.Print("Bem-vindo! Escreva o 1° número inteiro:");
	var num1 int;
	fmt.Scanln(&num1);

	fmt.Print("Agora escreva o 2° número inteiro:");
	var num2 int;
	fmt.Scanln(&num2)

	resultadoSoma:= num1 + num2;
	fmt.Println("A soma entre esses dois números:", resultadoSoma)

	resultadoSub:= num1 - num2;
	fmt.Println("A diferença entre esses dois números:", resultadoSub)
}