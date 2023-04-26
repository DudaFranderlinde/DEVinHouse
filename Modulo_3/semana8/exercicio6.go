package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Print("Bem-vindo! Escreva o 1° número inteiro:");
	var num1 int;
	fmt.Scanln(&num1);

	fmt.Print("Agora escreva o 2° número inteiro:");
	var num2 int;
	fmt.Scanln(&num2)

	resultadoExp:= math.Pow(float64(num1), float64(num2));
	fmt.Println("A soma entre esses dois números:", resultadoExp)

}