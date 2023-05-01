package main

import (
	"fmt"
	"time"
)

func main() {
	go func() {
		for i := 1; i <= 10; i++ {
			fmt.Println(i)
			time.Sleep(time.Second * 2)
		}
	}()

	time.Sleep(time.Second * 20)
	fmt.Println("Processamento executado com sucesso.")
}