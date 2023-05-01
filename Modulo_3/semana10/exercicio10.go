package main

import (
    "fmt"
	"time"

)

type task struct {
    name        string
}

type taskList interface {
    addTask(t task)
    removeTask(i int)
    printList()
}

type taskSlice struct {
    tasks []task
}

func main() {
	var tl taskList
    tl = &taskSlice{}

    tasks := make(chan []task)
    quit := make(chan bool)
    go printTaskCount(tasks, quit)

    for {
        var input string
        fmt.Println("Escolha uma operação:")
        fmt.Println("1) Adicionar tarefa")
        fmt.Println("2) Listar tarefas")
        fmt.Println("3) Remover tarefa")
        fmt.Println("4) Sair")
        fmt.Scanln(&input)

        switch input {
        case "1":
            var name string
            fmt.Println("Digite o nome da tarefa:")
            fmt.Scanln(&name)
            tl.addTask(task{name})
            tasks <- tl.(*taskSlice).tasks
        case "2":
            tl.printList()
            tasks <- tl.(*taskSlice).tasks
        case "3":
            var index int
            fmt.Println("Digite o índice da tarefa a ser removida:")
            fmt.Scanln(&index)
            tl.removeTask(index - 1)
            tasks <- tl.(*taskSlice).tasks
        case "4":
            quit <- true
            fmt.Println("Encerrando aplicação")
            return
        default:
            fmt.Println("Operação inválida")
        }
    }
}

func (ts *taskSlice) addTask(t task) {
    ts.tasks = append(ts.tasks, t)
    fmt.Println("Tarefa adicionada:", t.name)
    ts.printList()
}

func (ts *taskSlice) removeTask(i int) {
    t := ts.tasks[i]
    ts.tasks = append(ts.tasks[:i], ts.tasks[i+1:]...)
    fmt.Println("Tarefa removida:", t.name)
    ts.printList()
}

func (ts *taskSlice) printList() {
    fmt.Println("Lista de tarefas:")
    for i, t := range ts.tasks {
        fmt.Printf("%d) %s\n", i+1, t.name)
    }
}

func printTaskCount(tasks chan []task, quit chan bool) {
    for {
        select {
        case t := <-tasks:
            fmt.Println("Quantidade de tarefas:", len(t))
        case <-quit:
            fmt.Println("Encerrando exibição da quantidade de tarefas")
            return
        }
        time.Sleep(5 * time.Second)
    }
}