import { v4 as uuidv4 } from "uuid"
let saboresPizza = [] 

export function listaPizzas(request, response) {
    const pesquisaPizza = saboresPizza.filter(elemento=> elemento.name.toLowerCase().includes(request.query.name.toLocaleLowerCase()))
    if (request.query.name) {
       return response.json(pesquisaPizza)
    }
    response.status(200).json(saboresPizza)
}

export function criarPizza(request, response) {
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
}

export function atualizandoPizza(request, response) {
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
}

export function deletarPizza(request, response) {
    const filtraPizzas = saboresPizza.filter(elemento => elemento.id !== request.params.id)
    tasks = [...filtraPizzas]
    response.json()
}