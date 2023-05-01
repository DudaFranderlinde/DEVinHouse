package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())

	ch := make(chan int)
	for i := 1; i <= 10; i++ {
		go func(num int) {
			time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)
			ch <- num
		}(i)
	}

	for i := 1; i <= 10; i++ {
		fmt.Println(<-ch)
	}
}