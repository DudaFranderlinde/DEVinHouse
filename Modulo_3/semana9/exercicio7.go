package main

import "fmt"

func main() {
    array := make([]int, 100);

    for i := 0; i < len(array); i++ {
        array[i] = i + 1;
    };

    for _, num := range array {
        if ehPrimo(num) {
            fmt.Printf("%d é primo \n", num);
        };
    };
};

func ehPrimo(num int) bool {
    if num <= 1 {
        return false;
    };
    for i := 2; i <= num/2; i++ {
        if num%i == 0 {
            return false;
        };
    };
    return true;
};