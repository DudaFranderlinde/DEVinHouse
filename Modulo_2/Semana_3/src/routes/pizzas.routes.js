import { Router } from "express"
import { atualizandoPizza, criarPizza, deletarPizza, listaPizzas } from "../controllers/pizzas.controllers.js";


const pizzaRoutes = Router()


pizzaRoutes.get('/pizzas', listaPizzas)

pizzaRoutes.post('/pizzas', criarPizza)

pizzaRoutes.put('/pizzas/:id', atualizandoPizza)

pizzaRoutes.delete('/pizzas/:id', deletarPizza)

export default pizzaRoutes;