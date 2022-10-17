import { v4 as uuidv4 } from "uuid"
import fs from 'fs'
import { getPizzasFile } from "../utils/getPizzasFile.js"
import {Request, Response} from 'express'
import { BodyParamsAtualizarPizza, BodyParamsCriarPizza, Pizza, QueryParamsFindMyPizzas } from "../types/pizzas.types.js"

export function listaPizzas(request: Request<{}, {}, {}, QueryParamsFindMyPizzas> , response: Response) {
    const listaPizzas: Pizza[] = getPizzasFile()
    const name = request.query.name || "";

    const pesquisaPizza = listaPizzas.filter((elemento) => elemento.name.toLowerCase().includes(name.toLocaleLowerCase()))
    if (request.query.name) {
       return response.json(pesquisaPizza)
    }
    response.status(200).json(listaPizzas)
}

export function criarPizza(request: Request<{}, {}, BodyParamsCriarPizza> , response: Response) {
   const listaPizzas: Pizza[] = getPizzasFile()

    const pizzaExiste = listaPizzas.find(elemento=> elemento.name.toLocaleLowerCase() === request.body.name.toLocaleLowerCase());

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

    fs.writeFileSync('pizzas.json', JSON.stringify([...listaPizzas, novaPizza]))
    response.status(201).json(novaPizza);
}

export function atualizandoPizza(request: Request<{id:string}, {}, BodyParamsAtualizarPizza>, response: Response) {
   let listaPizzas: Pizza[] = getPizzasFile()

    const pizzaBusca = listaPizzas.find(elemento=> elemento.id === request.params.id);

    if (!pizzaBusca) {
        return response.status(404).json({error: "Item não encontrado no sistema"})
    }

    const atualizaPizza = listaPizzas.map(elemento=> {
        if (elemento.id === request.params.id) {
            elemento.name = request.body.name,
            elemento.description = request.body.description,
            elemento.price = request.body.price,
            elemento.ingredients = request.body.ingredients
        }
        return elemento;
    })

    listaPizzas = [...atualizaPizza]
    fs.writeFileSync('pizzas.json', JSON.stringify([...atualizaPizza]))
    response.json(listaPizzas)
}

export function deletarPizza(request: Request<{id:string}, {}, BodyParamsAtualizarPizza>, response: Response) {
    let listaPizzas: Pizza[] = getPizzasFile()
    const filtraPizzas = listaPizzas.filter(elemento => elemento.id !== request.params.id)
    fs.writeFileSync('pizzas.json', JSON.stringify([...filtraPizzas]))
    response.json()
}