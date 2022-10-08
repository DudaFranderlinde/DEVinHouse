const { request, response } = require('express');
const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(express.json())

let saboresPizza = []

app.get('/pizzas', (request, response)=> {
    const pesquisaPizza = saboresPizza.filter(elemento=> elemento.name.toLowerCase().includes(request.query.name.toLocaleLowerCase()))
    if (request.query.name) {
       return response.json(pesquisaPizza)
    }
    response.status(200).json(saboresPizza)
})

app.post('/pizzas', (request, response)=> {
    const pizzaExiste = saboresPizza.find(elemento=> elemento.name === request.body.name);

    if (pizzaExiste) {
        return response.status(401).json({error: "Esta pizza já foi cadastrada"})
    }
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

app.post('/solicitations', (request, response)=> {
    const novoPedido = {
        id: uuidv4(),
        client: request.body.client,
        cpf: request.body.cpf,
        address: request.body.address,
        phone: request.body.phone,
        payment: request.body.payment,
        description: request.body.description,
        demanded: request.body.demanded,
    }

    pedidos.push(novoPedido);
    response.json(novoPedido);
})

app.get('/solicitations/:id', (request, response)=> {
    const pedidoPesquisado = pedidos.find(elemento => elemento.id  === request.params.id);

    if (!pedidoPesquisado) {
        return response.json({error: "Item não encontrado no sistema"})
    }

    response.json(pedidoPesquisado);
})

app.put('/pizzas/:id', (request, response)=> {
    const pizzaBusca = saboresPizza.find(elemento=> elemento.id === request.params.id);

    if (!pizzaBusca) {
        return response.status(404).json({error: "Item não encontrado no sistema"})
    }

    const atualizaPizza = saboresPizza.map(elemento=> {
        if (elemento.id === request.params.id) {
            elemento.name = request.body.name,
            elemento.description = request.body.description,
            elemento.price = request.body.price,
            elemento.ingredients = request.body.ingredients
        }
        return elemento;
    })

    saboresPizza = [...atualizaPizza]
    response.json(saboresPizza)
})


app.delete('/pizzas/:id', (request, response)=> {
    const filtraPizzas = saboresPizza.filter(elemento => elemento.id !== request.params.id)
    tasks = [...filtraPizzas]
    response.json()
})

app.listen(3333, ()=> {
    console.log('Servidor Online');
})