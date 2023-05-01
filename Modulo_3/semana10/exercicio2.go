package main

import "fmt"

type Address struct {
	street  string
	city    string
	state   string
	zipCode string
}

type Person struct {
	name    string
	age     int
	address Address
}

func main() {
	endereco := Address{
		street:  "Rua tal",
		city:    "São Pedro",
		state:   "SC",
		zipCode: "88105-895",
	}

	pessoa := []Person{
		{name: "Théo", age: 17, address: endereco},
		{name: "Julia", age: 80, address: endereco},
		{name: "Pablo", age: 19, address: endereco},
	}

	fmt.Println(pessoa)
}