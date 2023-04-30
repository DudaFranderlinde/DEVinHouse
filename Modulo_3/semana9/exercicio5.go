package main

import (
    "fmt"
)

func main() {
	fmt.Println("Concatenado palavras!");
	fmt.Println("Qual é sua primeira primeira palavra?");
	var palavra1 string;
	fmt.Scanln(&palavra1);

	fmt.Println("Qual é sua segunda palavra?");
	var palavra2 string;
	fmt.Scanln(&palavra2);

    resultado := concatenar(palavra1, palavra2);
    fmt.Println("A concatenação resultou na seguinte frase: ", resultado);
}

func concatenar(str1, str2 string) string {
    return str1+" "+str2;
};
