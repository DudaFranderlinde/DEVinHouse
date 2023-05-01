package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan int)

	go func() {
		for i := 1; i <= 10; i++ {
			ch <- i
			time.Sleep(time.Second * 2)
		}
	}()

	msg := <-ch
	fmt.Println(msg)

	time.Sleep(time.Second * 20)
	fmt.Println("Processamento executado com sucesso.")
	close(ch)
}