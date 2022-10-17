import {Router} from 'express'
import { atualizarStatus, criarPedido, listarPedidos, pesquisarPedido } from '../controllers/solicitations.controllers.js'

const solicitationsRoutes = Router()

solicitationsRoutes.get('/solicitations', listarPedidos)
solicitationsRoutes.post('/solicitations', criarPedido)
solicitationsRoutes.get('/solicitations/:id', pesquisarPedido)
solicitationsRoutes.post('/solicitations/:id/status', atualizarStatus)

export default solicitationsRoutes