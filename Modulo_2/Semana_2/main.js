const express = require('express')
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(express.json())

let saboresPizza = []

app.get('/pizzas/:name', (request, response)=> {
    response.status(200).json(saboresPizza)
})

app.post('/pizzas', (request, response)=> {
    const novaPizza = {
        id: uuidv4(),
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        ingredients: request.body.ingredients,
    }

    saboresPizza.push(novaPizza);
    response.status(201).json(novaPizza);
})

let pedidos = []
app.get('/solicitations', (request, response)=> {
    response.status(200).json(pedidos);
})

app.listen(3333, ()=> {
    console.log('Servidor Online');
})