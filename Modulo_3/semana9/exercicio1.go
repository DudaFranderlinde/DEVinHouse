package main

import (
    "fmt"
)

func main() {
    fmt.Print("Me dê os números que te darei a soma deles:");
    var array []int;
    fmt.Scanln(&array);
    soma := somaArray(array);
    fmt.Println("A soma dos números é:", soma);
};


func somaArray(array []int) int {
    soma := 0;
    for _, num := range array {
        soma += num
    };
    return soma;
};
