package main

import (
    "fmt"
)

type task struct {
    name        string
    description string
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
    
    tl.addTask(task{name: "Comprar leite", description: "Comprar leite no mercado"})
    tl.addTask(task{name: "Lavar roupa", description: "Lavar a roupa suja"})
    tl.addTask(task{name: "Estudar Go", description: "Estudar Go para criar aplicações"})
    
    tl.removeTask(1)
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
        fmt.Printf("%d) %s - %s\n", i+1, t.name, t.description)
    }
}