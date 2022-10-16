import {Router} from 'express'
import { criarPedido, listarPedidos, pesquisarPedido } from '../controllers/solicitations.controllers.js'

const solicitationsRoutes = Router()

solicitationsRoutes.get('/solicitations', listarPedidos)

solicitationsRoutes.post('/solicitations', criarPedido)

solicitationsRoutes.get('/solicitations/:id', pesquisarPedido)

export default solicitationsRoutes