package main

import (
	"fmt"
	"semana9/labmath/labmath"
)


func main() {
	num := 17
	if labmath.IsPrimo(num) {
		fmt.Printf("%d é primo\n", num)
	} else {
		fmt.Printf("%d não é primo\n", num)
	}
}